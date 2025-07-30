import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load quotes.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '2rem' }}>Loading quotes...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Dr. Seuss Quotes</h1>
      {quotes.map((quote, index) => (
        <div
          key={index}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            borderLeft: '4px solid #4CAF50',
            borderRadius: '4px',
            fontStyle: 'italic',
          }}
        >
          <p>"{quote.text}"</p>
          <p style={{ textAlign: 'right', marginTop: '0.5rem', fontWeight: 'bold' }}>
            — {quote.character || 'Dr. Seuss'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
