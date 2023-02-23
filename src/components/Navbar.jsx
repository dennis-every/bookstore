import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', text: 'Bookstore CMS' },
  { path: 'books', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <header id="nav">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Navbar;
