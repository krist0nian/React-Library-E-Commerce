import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating"
import Price from "./Price"

const Book = ({ book }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
      setImg(image);
      }, 300);
    }
  })

  return (
    <div className="book">
      {img ? (
      <>
        <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img 
            src={book.url} 
            className="book__img" 
            alt="Book" 
            />
        </figure>
        </a>
        <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">{book.title}</a>
      </div>
      <Rating rating={book.rating} />
      <Price 
        salePrice={book.salePrice} 
        originalPrice={book.originalPrice} /> 
    </>
  ) : (
    <>
    <div className="book__img--skeleton"></div>
    <div className="skeleton book__title--skeleton"></div>
    <div className="skeleton book__rating--skeleton"></div>
    <div className="skeleton book__price--skeleton"></div>
    </>
  )}
    </div>
  );
};

export default Book;
