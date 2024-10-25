import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import satukLogo from './images/satuk_logo.png'; // Add appropriate image imports for PDF generation

const Nominees = () => {
  const [data, setData] = useState({});
  const [nominators, setNominators] = useState([]);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) setToken(storedToken);

    const fetchNominees = async () => {
      try {
        const response = await fetch('https://satuk.onrender.com/users/nominate', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const data = await response.json();

        if (data.success) {
          setData(data.data);
          setNominators(data.nominators);
        } else {
          setError('Failed to retrieve nominees');
        }
      } catch (err) {
        setError('Error fetching nominees');
      } finally {
        setLoading(false);
      }
    };

    fetchNominees();
  }, []);

  // Pagination logic
  const paginate = (array, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (type, totalPages) => {
    setCurrentPage((prev) => {
      if (type === 'next' && prev < totalPages) return prev + 1;
      if (type === 'prev' && prev > 1) return prev - 1;
      return prev;
    });
  };

  const generatePDF = (category, entries) => {
    const doc = new jsPDF();

    // Add logos
    doc.addImage(satukLogo, 'PNG', 10, 10, 50, 20);

    doc.setFontSize(24);
    doc.text(category.replace(/_/g, ' '), doc.internal.pageSize.getWidth() / 2, 50, null, null, 'center');

    // Add nominee data to PDF
    let yPos = 70;
    entries.forEach((entry, index) => {
      doc.setFontSize(12);
      doc.text(`Nominee ${index + 1}: ${entry.nomineeName}`, 20, yPos);
      doc.text(`Total Votes: ${entry.totalVotes}`, 150, yPos);
      yPos += 10;
    });

    doc.save(`${category}.pdf`);
  };

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nominees</h1>

      {/* Display each category */}
      {Object.keys(data).map((category) => {
        const nominees = data[category];
        const totalPages = Math.ceil(nominees.length / itemsPerPage);
        const paginatedNominees = paginate(nominees, currentPage, itemsPerPage);

        return (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.replace(/_/g, ' ')}</h2>

            {/* Nominees Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Nominee Name</th>
                    <th className="py-2 px-4 border">Total Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedNominees.map((nominee, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{toTitleCase(nominee.nomineeName)}</td>
                      <td className="py-2 px-4 border">{nominee.totalVotes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between my-4">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handlePageChange('prev', totalPages)}
              >
                Previous
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handlePageChange('next', totalPages)}
              >
                Next
              </button>
            </div>

            {/* Download PDF Button */}
            <button
              className="bg-green-600 text-white py-2 px-4 rounded"
              onClick={() => generatePDF(category, nominees)}
            >
              Download PDF
            </button>
          </div>
        );
      })}

      {/* Nominators Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Nominators</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Nominator Email</th>
              </tr>
            </thead>
            <tbody>
              {paginate(nominators, currentPage, itemsPerPage).map((nominator, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{nominator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination for Nominators */}
        <div className="flex justify-between my-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => handlePageChange('prev', Math.ceil(nominators.length / itemsPerPage))}
          >
            Previous
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => handlePageChange('next', Math.ceil(nominators.length / itemsPerPage))}
          >
            Next
          </button>
        </div>

        {/* Download Nominators PDF Button */}
        <button
          className="bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => generatePDF('Nominators', nominators)}
        >
          Download Nominators PDF
        </button>
      </div>
    </div>
  );
};

export default Nominees;
