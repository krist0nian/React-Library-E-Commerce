import './App.css';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';
import BookInfo from "./pages/BookInfo";
import React, { useState, useEffect } from 'react';
import Cart from "./pages/Cart";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
    return item.id === book.id
      ? {
        ...item,
        quantity: +quantity,
      }
      : item
    }
  ))
  }

  function removeItem(book) {
    setCart(cart.filter(book => book.id !== book.id))
    console.log("removeItem", book)
    }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={(props) => <Books {...props} books={books} addToCart={addToCart}/>} />
        <Route path="/books/:id" render={(props) => <BookInfo {...props} books={books} addToCart={addToCart}/>} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
