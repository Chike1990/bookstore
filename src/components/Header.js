import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div style={{
      display: 'flex', alignItems: 'center', maxWidth: '700px', marginLeft: 'calc(100% - 970px)',
    }}
    >
      <h1 className="Header_title">Bookstore CMS</h1>
      <nav className="Header_nav">
        <Link to="/" style={{ marginRight: '30px' }} className="Header_link">Books</Link>
        <Link to="/Categories" className="Header_link">Categories</Link>
      </nav>
    </div>
  </div>
);

export default Header;