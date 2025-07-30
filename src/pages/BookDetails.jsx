import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: '2rem' }}>Loading book details...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
  if (!book) return <p style={{ padding: '2rem' }}>No book found.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#007bff', textDecoration: 'underline' }}>
        ← Back to Books
      </Link>
      <img
        src={book.coverImage}
        alt={book.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
      />
      <h1>{book.title}</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.5' }}>{book.description}</p>
    </div>
  );
};

export default BookDetails;
