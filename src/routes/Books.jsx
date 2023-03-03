import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBooks } from '../redux/books/booksSlice';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.books.ifSucceed);
  const books = useSelector((store) => store.books.books);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [ifSucceed, dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (ifSucceed) {
    content = Object.keys(books).map((key) => {
      const currentBook = books[key][0];
      return (
        <Book
          key={key}
          id={key}
          title={currentBook.title}
          author={currentBook.author}
        />
      );
    });
  }

  return (
    <section>
      <ul>{content}</ul>
      <Form />
    </section>
  );
};

export default Books;
