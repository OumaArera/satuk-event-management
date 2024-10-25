import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setError('No access token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://satuk.onrender.com/users/tickets', {
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
          setError(data.message || 'Failed to fetch tickets');
        }
      } catch (err) {
        setError('Error fetching tickets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Ticket Data', 14, 10);
    doc.autoTable({
      head: [['Name', 'Email', 'Phone', 'Type', 'Transaction Code', 'Ticket Number', 'Date']],
      body: tickets.map((ticket) => [
        ticket.name,
        ticket.email,
        ticket.phone,
        ticket.type === 'STANDARD' ? 'REGULAR' : ticket.type,
        ticket.transactionCode,
        ticket.ticketNumber,
        new Date(ticket.createdAt).toLocaleDateString(),
      ]),
      startY: 20,
    });
    doc.save('tickets.pdf');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Tickets</h1>
      <button onClick={downloadPDF} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Download PDF
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Transaction Code</th>
              <th className="py-2 px-4 border">Ticket Number</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="py-2 px-4 border">{ticket.name}</td>
                <td className="py-2 px-4 border">{ticket.email}</td>
                <td className="py-2 px-4 border">{ticket.phone}</td>
                <td className="py-2 px-4 border">
                  {ticket.type === 'STANDARD' ? 'REGULAR' : ticket.type}
                </td>
                <td className="py-2 px-4 border">{ticket.transactionCode}</td>
                <td className="py-2 px-4 border">{ticket.ticketNumber}</td>
                <td className="py-2 px-4 border">{new Date(ticket.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
