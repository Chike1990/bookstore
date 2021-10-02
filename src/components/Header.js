import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header_wrapper">
    <div className="Header">
      <div className="HeaderStyle">
        <h1 className="Header_title">Bookstore CMS</h1>
        <nav className="Header_nav">
          <Link to="/" style={{ marginRight: '30px' }} className="Header_link">Books</Link>
          <Link to="/Categories" className="Header_link">Categories</Link>
        </nav>
      </div>
      <div className="Header_profile">
        <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14 Header_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1d8ff3" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
      </div>
    </div>
  </div>
);

export default Header;
