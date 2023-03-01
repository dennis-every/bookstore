import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <section>
      <h1>List of books</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </section>
  );
};

export default Books;
