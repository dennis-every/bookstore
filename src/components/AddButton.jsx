/* eslint-disable react/prop-types */
const AddButton = (props) => {
  const { onClick } = props;

  return (
    <button type="submit" onClick={onClick}>Add book</button>
  );
};

export default AddButton;
