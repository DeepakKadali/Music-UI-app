import SearchBox from '../SearchBox/SearchBox';
import Logo from '../Logo/Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <SearchBox />
      <button className="nav-btn">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
