import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import {
  selectAllBooks,
  getBooksStatus,
  getBooksError,
  fetchBooks,
} from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const booksError = useSelector(getBooksError);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  let content;
  if (booksStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (booksStatus === 'succeeded') {
    content = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
      />
    ));
  } else if (booksStatus === 'failed') {
    content = <p>{booksError}</p>;
  }

  return (
    <section>
      <h1>List of books</h1>
      <ul>{content}</ul>
      <Form />
    </section>
  );
};

export default Books;
