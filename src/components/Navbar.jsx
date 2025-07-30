import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#4CAF50' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Books
      </Link>
      <Link to="/quotes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Quotes
      </Link>
    </nav>
  );
};

export default Navbar;
