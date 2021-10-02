/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

import './Book.css';

const Book = ({
  title, author, category, itemId,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="Book">
      <div>
        <p className="Book_category">{category || 'Action'}</p>
        <p className="Book_title">{title}</p>
        <p className="Book_author">{author || 'Chinua Achebe'}</p>
        <div className="Book_actions">
          <span className="Book_action-btn">Comment</span>
          <span
            onClick={() => dispatch(removeBookAsync(itemId))}
            className="Book_action-btn"
            role="button"
            tabIndex="0"
          >
            Remove
          </span>
          <span className="Book_action-btn">Edit</span>
        </div>
      </div>
      <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5rem' }}>
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="60, 100"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span>
          64%
          {' '}
          <br />
          Completed
        </span>
      </span>
      <div style={{ marginLeft: '5rem' }}>
        <p style={{ color: '#121212', opacity: '0.5' }}>CURRENT CHAPTER</p>
        <p style={{ color: '#121212', opacity: '0.7', marginTop: '8px' }}>Chapter 5</p>
        <div className="Book_update-progress">Update Progress</div>
      </div>
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
