import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  let content;
  if (categories.length > 0) {
    content = <h2>{categories}</h2>;
  } else {
    content = (
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
    );
  }
  return <section>{content}</section>;
};

export default Categories;
