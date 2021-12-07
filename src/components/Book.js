import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Book = ({
  title, author, category, itemId,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button id={itemId} type="button" onClick={() => dispatch(removeBookAsync(itemId))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;

/* eslint-enable react/jsx-props-no-spreading */
