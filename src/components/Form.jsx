import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import AddButton from './AddButton';

const Form = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      ...formInputs,
    };
    dispatch(addBook(newBook));
    setFormInputs({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <label htmlFor="title">
        <input
          type="text"
          placeholder="title"
          name="title"
          value={formInputs.title}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          placeholder="author"
          name="author"
          value={formInputs.author}
          onChange={handleChange}
          required
        />
      </label>
      <AddButton onClick={handleSubmit} />
    </form>
  );
};

export default Form;
