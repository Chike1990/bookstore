import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className='Header_title'>Bookstore CMS</h1>
        <nav className='Header_nav'>
          <Link to='/' style={{ marginRight: '30px' }} className='Header_link'>Books</Link>
          <Link to='/Categories' className='Header_link'>Categories</Link>
        </nav>
      </div>
      <div className="Header_avatar"></div>
    </div>
  );
};

export default Header;
