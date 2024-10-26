import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import satukLogo from './images/satuk_logo.png'; 

const Nominees = () => {
  const [data, setData] = useState({});
  const [nominators, setNominators] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');

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
          // Initialize pagination states for each category
          const initialPagination = Object.keys(data.data).reduce((acc, category) => {
            acc[category] = 1;
            return acc;
          }, {});
          setPagination({ ...initialPagination, nominators: 1 });
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

  // Paginate array based on current page for each category
  const paginate = (array, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (type, category, totalPages) => {
    setPagination((prev) => {
      const newPage = type === 'next' && prev[category] < totalPages ? prev[category] + 1
                      : type === 'prev' && prev[category] > 1 ? prev[category] - 1
                      : prev[category];
      return { ...prev, [category]: newPage };
    });
  };

  const generatePDF = (category, entries) => {
    const doc = new jsPDF();
    doc.addImage(satukLogo, 'PNG', 10, 10, 50, 20);

    doc.setFontSize(24);
    doc.text(category.replace(/_/g, ' '), doc.internal.pageSize.getWidth() / 2, 50, null, null, 'center');

    let yPos = 70;
    entries.forEach((entry, index) => {
      if (yPos > 270) {  // If yPos exceeds page height, create a new page
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      if (category === 'Nominators') {
        doc.text(`Email: ${entry.email}`, 20, yPos);
        doc.text(`Date: ${new Date(entry.createdAt).toLocaleDateString()}`, 120, yPos);
      } else {
        doc.text(`Nominee ${index + 1}: ${entry.nomineeName}`, 20, yPos);
        doc.text(`Total Votes: ${entry.totalVotes}`, 150, yPos);
      }
      yPos += 10;
    });

    doc.save(`${category}.pdf`);
};

const generateNominatorsPDF = (nominators) => {
    const doc = new jsPDF();
    doc.addImage(satukLogo, 'PNG', 10, 10, 50, 20);

    doc.setFontSize(24);
    doc.text(
      'Nominators',
      doc.internal.pageSize.getWidth() / 2,
      50,
      null,
      null,
      'center'
    );

    let yPos = 70;
    nominators.forEach((email, index) => {
      if (yPos > 270) {  // If yPos exceeds page height, create a new page
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(12);
      doc.text(`Nominator ${index + 1}: ${email}`, 20, yPos);
      yPos += 10;
    });

    doc.save('Nominators.pdf');
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
        const paginatedNominees = paginate(nominees, pagination[category]);

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
                onClick={() => handlePageChange('prev', category, totalPages)}
              >
                Previous
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handlePageChange('next', category, totalPages)}
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
              {paginate(nominators, pagination.nominators).map((nominator, index) => (
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
            onClick={() => handlePageChange('prev', 'nominators', Math.ceil(nominators.length / itemsPerPage))}
          >
            Previous
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => handlePageChange('next', 'nominators', Math.ceil(nominators.length / itemsPerPage))}
          >
            Next
          </button>
        </div>

        {/* Download Nominators PDF Button */}
        <button
          className="bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => generateNominatorsPDF(nominators)}
        >
          Download Nominators PDF
        </button>
      </div>
    </div>
  );
};

export default Nominees;
