import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

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
          setCategories(data.data.filter(category => category.categoryId !== 1 && category.categoryId !== 2));
          setVoters(data.voters.map(voter => voter.toLowerCase()));
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

  const displayedVoters = voters.slice(
    (currentPage - 1) * votersPerPage,
    currentPage * votersPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const downloadVotersPDF = () => {
    const timestamp = new Date().toLocaleString();
    const pdfContent = document.getElementById('pdfContent');
    
    const options = {
      margin: 1,
      filename: `voters_list_${Date.now()}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all', before: '.category' } // Ensures each category starts on a new page
    };
    
    html2pdf().set(options).from(pdfContent).save();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Vote Counts by Category</h1>
      
      <div id="pdfContent">
        <p className="text-right text-sm">Timestamp: {new Date().toLocaleString()}</p>
        
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

        <div className="voters-table bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Voters List</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-4">#</th>
                <th className="border-b-2 p-4">Voter Email</th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{voter}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <p className="text-center text-sm mt-8">Secure Document - Confidential</p>
          <p className="text-center text-xs">Generated on {new Date().toLocaleDateString()} | Page {currentPage} of {totalPages}</p>
        </div>
      </div>

      <button 
        onClick={downloadVotersPDF} 
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Voters List as PDF
      </button>

      <div className="pagination mt-4 flex justify-center">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 mx-1 rounded bg-gray-300"
          >
            Prev
          </button>
        )}
        
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
        
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
  );
};

export default Votes;
