import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
      <div className="logo">
        <Link to="/">Sharayu Borude</Link>
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    <hr className='line-x'/>
    </>
  );
};

export default Header;
