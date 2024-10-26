import React, { useEffect, useState } from 'react';

const Votes = () => {
  const [categories, setCategories] = useState([]);
  const [voters, setVoters] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const votersPerPage = 5; // Adjust the number of voters per page as needed

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    const fetchCandidatesAndVoters = async () => {
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
          setVoters(data.voters); // Populate voter list
        } else {
          setError('Failed to retrieve candidates');
        }
      } catch (err) {
        setError('Error fetching candidates');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidatesAndVoters();
  }, []);

  const totalPages = Math.ceil(voters.length / votersPerPage);

  // Calculate the displayed voters based on current page
  const displayedVoters = voters.slice(
    (currentPage - 1) * votersPerPage,
    currentPage * votersPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Vote Counts by Category</h1>

      {categories.map((category) => (
        <div key={category.categoryId} className="category mb-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{category.categoryName}</h2>
          <ul>
            {category.candidates.map((candidate) => (
              <li key={candidate.id} className="candidate py-2 flex justify-between border-b">
                <span>{candidate.name}</span>
                <span>{candidate.vote} votes</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Voters Table */}
      <div className="voters-table bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Voters List</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4">Voter Email</th>
            </tr>
          </thead>
          <tbody>
            {displayedVoters.map((voter, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{voter}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination mt-4 flex justify-center">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Votes;
