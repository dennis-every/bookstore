import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const books = [
    { id: 1, title: 'The Hunger Games' },
    { id: 2, title: 'Dune' },
    { id: 3, title: 'Capital in the Twenty-First Century' },
  ];
  return (
    <section>
      <h1>List of books</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} />
        ))}
      </ul>
      <Form />
    </section>
  );
};

export default Books;
