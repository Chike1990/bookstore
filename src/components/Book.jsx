import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Book = ({ title, author, category, item_id }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button id={item_id} type="button" onClick={() => dispatch(removeBookAsync(item_id))}>Remove</button>
    </div>
  );
};

export default Book;
