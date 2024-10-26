import React, { useEffect, useState } from 'react';

const Votes = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('accessToken');

    // Define the fetchCandidates function
    const fetchCandidates = async () => {
      try {
        const response = await fetch('https://satuk.onrender.com/users/candidate', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        } else {
          setError('Failed to retrieve candidates');
        }
      } catch (err) {
        setError('Error fetching candidates');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Vote Counts by Category</h1>

      {categories.map(category => (
        <div key={category.categoryId} className="category mb-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{category.categoryName}</h2>
          <ul>
            {category.candidates.map(candidate => (
              <li key={candidate.id} className="candidate py-2 flex justify-between border-b">
                <span>{candidate.name}</span>
                <span>{candidate.vote} votes</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Votes;
