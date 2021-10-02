/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as id } from 'uuid';
import Book from './Book';
import {
  addBookAsync,
} from '../redux/books/books';

import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      {books.length > 0
        ? books.map((book) => (
          <Book {...book} />
        )) : (<p>There are no books</p>)}
      <div className="Books_form">
        <p style={{ marginTop: '' }}>ADD NEW BOOK</p>
        <div className="Books_form-input">

          <input className="Books_input" type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
          <select className="Books_select" name="" id="" onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Category--</option>
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Renaisance">Renaisance</option>
          </select>
          <button className="Books_btn" type="button" onClick={() => dispatch(addBookAsync({ item_id: id(), title, category }))}>ADD BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default Books;

/* eslint-enable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
