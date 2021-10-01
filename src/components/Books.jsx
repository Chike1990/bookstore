import {useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react";
import {v4 as id} from "uuid";
import Book from "./Book";
import { addBookAsync} from "../redux/books/books"

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  // For generating api key
  // useEffect(() => {
  //   axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps")
  //   .then(res => console.log(res))
  // }, [])

  return (
    <div>
      {books.length > 0 ?
        books.map((book) => (
        <Book {...book} />
      )): (<p>There are no books</p>)}
      <div>
        <p>ADD NEW BOOK</p>
        <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="">--Select Category--</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Renaisance">Renaisance</option>
        </select>
        <button onClick={() => dispatch(addBookAsync({item_id: id(), title, category}))}>ADD BOOK</button>
      </div>
      </div>
  );
};

export default Books;