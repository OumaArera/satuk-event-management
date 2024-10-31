import React, { useEffect, useState } from 'react';

const mockNominees = {
  "The_Vice_Chancellor's_Award": [
    { nomineeName: "XYZ", totalVotes: 20 },
    { nomineeName: "XYD", totalVotes: 18 },
    { nomineeName: "XVZ", totalVotes: 15 },
  ],
  "Indoor_Games_Sports_Person_of_the_Year_Award": [
    { nomineeName: "ABC", totalVotes: 25 },
    { nomineeName: "DEF", totalVotes: 22 },
    { nomineeName: "GHI", totalVotes: 19 },
  ],
};

const Nominees = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate data loading for 3 seconds
    setTimeout(() => {
      setData(mockNominees);
      setPagination(
        Object.keys(mockNominees).reduce((acc, category) => {
          acc[category] = 1;
          return acc;
        }, {})
      );
      setLoading(false);
    }, 3000);
  }, []);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nominees</h1>

      {Object.keys(data).map((category) => {
        const nominees = data[category];
        const totalPages = Math.ceil(nominees.length / itemsPerPage);
        const paginatedNominees = paginate(nominees, pagination[category]);
        const totalVoters = nominees.reduce((sum, nominee) => sum + nominee.totalVotes, 0);

        return (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.replace(/_/g, ' ')}</h2>

            {/* Nominees Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedNominees.map((nominee, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{nominee.nomineeName}</td>
                      <td className="py-2 px-4 border">{nominee.totalVotes}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Total Voters:</td>
                    <td className="py-2 px-4">{totalVoters}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Pagination Controls */}
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
          </div>
        );
      })}
    </div>
  );
};

export default Nominees;
