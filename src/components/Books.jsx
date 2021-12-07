import { useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books] = useState([
    {
      title: "The one man show",
      category: "action",
      author: "Kenneth Jefferson",
    },
    {
      title: "The one man show",
      category: "action",
      author: "Kenneth Jefferson",
    },
  ]);
  return (
    <div>
      {books.map((book) => (
        <Book {...book} />
      ))}
      <form action="">
        <p>ADD NEW BOOK</p>
        <input type="text" placeholder="Book title" />
        <select name="" id="">
          <option value="">Category</option>
        </select>
        <button>ADD BOOK</button>
      </form>
      </div>
  );
};

export default Books;