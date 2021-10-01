
import axios from "axios"
import books from "./booksSeed";

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const API_KEY = "G5gGyLBmqrL0XfYsIJnI"
const api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/`

let initialState = books;

const addBook = payload => {
  return {
    type: ADD_BOOK,
    payload
}
}

const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload
})

export const addBookAsync = (data) => {
  return (dispatch) => {
      axios.post(`${api}books`, data)
        .then(res => JSON.parse(res.config.data))
        .then(book => dispatch(addBook(book)))
        .catch(err => console.log(err))
  }
}

export const removeBookAsync = (id) => {
  return (dispatch) => {
    axios.delete(`${api}books/${id}`)
      .then(res => {
        if (res.status === 201)
          dispatch(removeBook(id))
      })
      .catch(err => console.log(err))
  }
}


const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]
    case REMOVE_BOOK:
      return state.filter(book => book.item_id !== action.payload)
    default:
      return state
  }
}

export default bookReducer;
