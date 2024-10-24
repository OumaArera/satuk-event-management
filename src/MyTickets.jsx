import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-barcode';
import satukLogo from './images/satuk_logo.png'; 
import tukLogo from './images/tuk_logo.png';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch token from local storage
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) setToken(storedToken);

    // Fetch tickets from API
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://satuk.onrender.com/users/my-tickets', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const data = await response.json();

        if (data.success) {
          setTickets(data.data);
        } else {
          setError('Failed to retrieve tickets');
        }
      } catch (err) {
        setError('Error fetching tickets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Function to generate a PDF for each paid ticket
  const generatePDF = (ticket) => {
    const doc = new jsPDF();

    // Add logos to the header
    doc.addImage(satukLogo, 'PNG', 10, 10, 50, 20);
    doc.addImage(tukLogo, 'PNG', 150, 10, 50, 20);

    // Ticket details
    doc.setFontSize(18);
    doc.text('SATUK AWARDS 2024 - TICKET', 60, 50);

    doc.setFontSize(12);
    doc.text(`Ticket Number: ${ticket.ticketNumber}`, 20, 70);
    doc.text(`Name: ${ticket.name}`, 20, 80);
    doc.text(`Email: ${ticket.email}`, 20, 90);
    doc.text(`Phone: ${ticket.phone}`, 20, 100);
    doc.text(`Type: ${ticket.type === 'VIP' ? 'VIP' : 'REGULAR'}`, 20, 110);
    doc.text(`Payment Date: ${new Date(ticket.createdAt).toLocaleDateString()}`, 20, 120);

    // Add barcode at the bottom
    doc.text('Barcode:', 20, 140);
    doc.barcode(ticket.ticketNumber, {
      x: 20,
      y: 145,
      width: 100,
      height: 30,
    });

    // Save the PDF
    doc.save(`ticket-${ticket.ticketNumber}.pdf`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Filter tickets that are paid
  const paidTickets = tickets.filter(ticket => ticket.status === 'paid');

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Tickets</h1>

      <div className="paid-tickets mb-8">
        <h2 className="text-2xl font-bold mb-4">Paid Tickets</h2>
        {paidTickets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paidTickets.map(ticket => (
              <div key={ticket.id} className="bg-white shadow-md p-4 rounded-lg">
                <p><strong>Ticket Number:</strong> {ticket.ticketNumber}</p>
                <p><strong>Name:</strong> {ticket.name}</p>
                <p><strong>Email:</strong> {ticket.email}</p>
                <p><strong>Type:</strong> {ticket.type === 'VIP' ? 'VIP' : 'REGULAR'}</p>
                <p><strong>Status:</strong> {ticket.status}</p>
                <p><strong>Date:</strong> {new Date(ticket.createdAt).toLocaleDateString()}</p>

                <button
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  onClick={() => generatePDF(ticket)}
                >
                  Download Ticket PDF
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No paid tickets available.</p>
        )}
      </div>

      <div className="pending-tickets">
        <h2 className="text-2xl font-bold mb-4">Pending Tickets</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Ticket Number</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets
              .filter(ticket => ticket.status !== 'paid')
              .map(ticket => (
                <tr key={ticket.id}>
                  <td className="py-2 px-4 border">{ticket.ticketNumber}</td>
                  <td className="py-2 px-4 border">{ticket.name}</td>
                  <td className="py-2 px-4 border">{ticket.email}</td>
                  <td className="py-2 px-4 border">{ticket.phone}</td>
                  <td className="py-2 px-4 border">{ticket.type === 'VIP' ? 'VIP' : 'STANDARD'}</td>
                  <td className="py-2 px-4 border">{ticket.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTickets;
