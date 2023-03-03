import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RemoveButton from './RemoveButton';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <h3 className="category">Fiction</h3>
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
      <br />
      <ul className="links">
        <li><button type="button">Comments</button></li>
        <li><RemoveButton onClick={handleRemove} /></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
