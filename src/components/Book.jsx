import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import RemoveButton from './RemoveButton';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book-container">
      <ul className="book">
        <li>
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
        <li className="progress-stats">
          <div className="progress-bar">
            <CircularProgressbar value={75} />
          </div>
          <div className="progress-number">
            <h3>64%</h3>
            <h5>Completed</h5>
          </div>
        </li>
        <li className="chapters">
          <h4>CURRENT CHAPTER</h4>
          <h3>Chapter 17</h3>
          <button type="button">UPDATE PROGRESS</button>
        </li>
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
