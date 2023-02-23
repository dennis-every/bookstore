const Form = () => (
  <form>
    <label htmlFor="title">
      <input type="text" placeholder="title" />
    </label>
    <label htmlFor="author">
      <input type="text" placeholder="author" />
    </label>
    <button type="submit">Add book</button>
  </form>
);

export default Form;
