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
          // Set categories and voters, excluding categories with categoryId 1 and 2
          setCategories(data.data.filter(category => category.categoryId !== 1 && category.categoryId !== 2));
          setVoters(data.voters.map(voter => voter.toLowerCase())); // Convert voter emails to lowercase
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

  // Calculate the displayed voters based on the current page
  const displayedVoters = voters.slice(
    (currentPage - 1) * votersPerPage,
    currentPage * votersPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  // Function to download the voters list as a text file
  const downloadVoters = () => {
    const voterList = voters.map((voter, index) => `${index + 1}. ${voter}`).join('\n');
    const blob = new Blob([voterList], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'voters_list.txt';
    link.click();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Vote Counts by Category</h1>

      {/* Display categories excluding those with categoryId 1 and 2 */}
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
        <button 
          onClick={downloadVoters} 
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Voters List
        </button>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4">#</th>
              <th className="border-b-2 p-4">Voter Email</th>
            </tr>
          </thead>
          <tbody>
            {displayedVoters.map((voter, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{(currentPage - 1) * votersPerPage + index + 1}</td>
                <td className="p-4">{voter}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination mt-4 flex justify-center">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 mx-1 rounded bg-gray-300"
            >
              Prev
            </button>
          )}

          {currentPage > 2 && (
            <>
              <button onClick={() => handlePageChange(1)} className="px-3 py-1 mx-1 rounded bg-gray-300">
                1
              </button>
              {currentPage > 3 && <span className="px-3">...</span>}
            </>
          )}

          {[...Array(totalPages)]
            .map((_, i) => i + 1)
            .filter(
              (page) =>
                page === currentPage ||
                page === currentPage - 1 ||
                page === currentPage + 1
            )
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}

          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && <span className="px-3">...</span>}
              <button onClick={() => handlePageChange(totalPages)} className="px-3 py-1 mx-1 rounded bg-gray-300">
                {totalPages}
              </button>
            </>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 mx-1 rounded bg-gray-300"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Votes;
