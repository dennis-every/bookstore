import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RemoveButton from './RemoveButton';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      {title}
      {' - '}
      {author}
      <RemoveButton onClick={handleRemove} />
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
