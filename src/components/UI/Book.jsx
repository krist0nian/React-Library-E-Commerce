import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="Book" />
        </figure>
      </a>
      <div className="book__title">
        <a href="">{book.title}</a>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
        }
        {
            !Number.isInteger(book.rating) && (
                <FontAwesomeIcon icon="star-half-alt" />
            )
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">{book.originalPrice}</span>
            {book.salePrice}
          </>
        ) : (
          book.originalPrice
        )}
      </div>
    </div>
  );
};

export default Book;
