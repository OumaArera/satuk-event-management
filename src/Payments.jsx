import React, { useEffect, useState } from 'react';

const Payments = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // Track individual button loading

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) return;

      try {
        const response = await fetch('https://satuk.onrender.com/users/ticket', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          setTickets(data.data);
        } else {
          setError('You have no pending ticket requests');
        }
      } catch (err) {
        setError('Error fetching tickets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleAction = async (id, action) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    setActionLoading(id); 

    const url = action === 'approve'
      ? `https://satuk.onrender.com/users/ticket/${id}`
      : `https://satuk.onrender.com/users/decline-ticket/${id}`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove the ticket from the list upon successful action
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== id));
      } else {
        console.error(`Failed to ${action} ticket`);
      }
    } catch (error) {
      console.error(`Error ${action} ticket:`, error);
    } finally {
      setActionLoading(null); // Reset the loading state after action
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payments</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Transaction Code</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="py-2 px-4 border">{ticket.name}</td>
                <td className="py-2 px-4 border">{ticket.email}</td>
                <td className="py-2 px-4 border">{ticket.phone}</td>
                <td className="py-2 px-4 border">{ticket.type}</td>
                <td className="py-2 px-4 border">{ticket.transactionCode}</td>
                <td className={`py-2 px-4 border ${ticket.status === 'approved' ? 'text-green-500' : ticket.status === 'declined' ? 'text-red-500' : 'text-yellow-500'}`}>
                  {ticket.status}
                </td>
                <td className="py-2 px-4 border text-center">
                  <button
                    onClick={() => handleAction(ticket.id, 'approve')}
                    disabled={actionLoading === ticket.id}
                    className={`mr-2 ${actionLoading === ticket.id ? 'bg-gray-300' : 'bg-green-500 text-white'} px-4 py-1 rounded`}
                  >
                    {actionLoading === ticket.id ? 'Sending...' : 'Approve'}
                  </button>
                  <button
                    onClick={() => handleAction(ticket.id, 'decline')}
                    disabled={actionLoading === ticket.id}
                    className={`${actionLoading === ticket.id ? 'bg-gray-300' : 'bg-red-500 text-white'} px-4 py-1 rounded`}
                  >
                    {actionLoading === ticket.id ? 'Sending...' : 'Decline'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
