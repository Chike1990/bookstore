import React from 'react';

const Book = ({title, author, category}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button>Remove</button>
    </div>
  );
};

export default Book;