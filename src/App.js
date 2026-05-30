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
    setCart(books.map(item => {
    return item.id === book.id
      ? {
        ...item,
        quantity: +quantity,
      }
      : item
    }
  ))
  }

  function removeItem(item) {
    setCart(books.filter(book => book.id !== item.id))
    console.log("removeItem", item)
    }

  function numberOfItems() {
    let counter = 0;
    books.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [books])

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
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
