import {useDispatch} from "react-redux"
import { useState } from "react";
import {v4 as id} from "uuid";
import Book from "./Book";
import { addBook, removeBook} from "../redux/books/books"

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
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
      <div>
        <p>ADD NEW BOOK</p>
        <form>
          <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="">--Select Category--</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Renaisance">Renaisance</option>
        </select>
        <button onClick={() => dispatch(addBook({id: id(), title, category}))}>ADD BOOK</button>
        </form>
      </div>
      </div>
  );
};

export default Books;