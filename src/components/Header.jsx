import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div style={{display: "flex", alignItems: "center"}}>
      <h1 className="Header_title">Bookstore CMS</h1>
      <nav className="Header_nav">
          <a style={{marginRight:"30px"}}href="" className="Header_link">Books</a>
        <a href="" className="Header_link">Categories</a>
        </nav>
      </div>
      <div className="Header_avatar"></div>
    </div>
  );
};

export default Header;
