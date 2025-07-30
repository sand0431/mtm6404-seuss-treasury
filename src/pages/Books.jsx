import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load books.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '2rem' }}>Loading books...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Books Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {books.map(book => (
          <Link
            key={book.id}
            to={`/book/${book.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
              width: '200px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={book.coverImage}
              alt={book.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              loading="lazy"
            />
            <h3 style={{ textAlign: 'center', padding: '0.5rem' }}>{book.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
