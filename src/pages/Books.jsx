import React, { useState, useEffect } from 'react';
import Book from '../components/UI/Book';
import Rating from '../components/UI/Rating'

const Books = ({ books: initialBooks, addToCart }) => {
    const [books, setBooks] = useState(initialBooks);

    useEffect(() => {
        setBooks(initialBooks);
    }, [initialBooks]);

    function filterBooks(filter) {

        const base = initialBooks.slice();
        
        if (filter === "LOW_TO_HIGH") {
            setBooks(base.sort((a, b) => (a.salePrice ?? a.originalPrice) - (b.salePrice ?? b.originalPrice)));
        }
        if (filter === "HIGH_TO_LOW") {
            setBooks(base.sort((a, b) => (b.salePrice ?? b.originalPrice) - (a.salePrice ?? a.originalPrice)));
        }
        if (filter === "RATING") {
            setBooks(base.sort((a, b) => (b.rating - 0) - (a.rating - 0)));
        }            
    }
    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header-title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price: Low to High</option>
                                <option value="HIGH_TO_LOW">Price: High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                            </div>
                            <div className="books">
                                {books.map((book) => (
                                    <Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Books;