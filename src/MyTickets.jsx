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

  // Updated generatePDF function with improved rendering
  const generatePDF = (ticket) => {
    const doc = new jsPDF();
  
    // Add logos to the header with proper dimensions
    const satukLogoWidth = 50; // Width of the satuk logo
    const satukLogoHeight = 20; // Height of the satuk logo
    const tukLogoWidth = 50; // Width of the tuk logo
    const tukLogoHeight = 20; // Height of the tuk logo
  
    // Add logos to the header
    doc.addImage(satukLogo, 'PNG', 10, 10, satukLogoWidth, satukLogoHeight);
    doc.addImage(tukLogo, 'PNG', 150, 10, tukLogoWidth, tukLogoHeight);
  
    // Ticket details with adjusted styles
    doc.setFontSize(24);
    doc.setFont('bold');
    doc.text(`Ticket Number: ${ticket.ticketNumber}`, doc.internal.pageSize.getWidth() / 2, 60, null, null, 'center');
    
    doc.setFontSize(18);
    doc.text(`Type: ${ticket.type === 'VIP' ? 'VIP' : 'REGULAR'}`, doc.internal.pageSize.getWidth() / 2, 80, null, null, 'center');
  
    doc.setFontSize(12);
    doc.setFont('normal');
    doc.text(`Name: ${ticket.name}`, doc.internal.pageSize.getWidth() / 2, 100, null, null, 'center');
    doc.text(`Email: ${ticket.email}`, doc.internal.pageSize.getWidth() / 2, 110, null, null, 'center');
    doc.text(`Phone: ${ticket.phone}`, doc.internal.pageSize.getWidth() / 2, 120, null, null, 'center');
    doc.text(`Payment Date: ${new Date(ticket.createdAt).toLocaleDateString()}`, doc.internal.pageSize.getWidth() / 2, 130, null, null, 'center');
  
    // Generate a unique validation code
    const validationCode = generateUniqueCode();
    doc.setFontSize(16);
    doc.setFont('bold');
    doc.text(`Validation Code: ${validationCode}`, doc.internal.pageSize.getWidth() / 2, 160, null, null, 'center');
  
    // Draw a decorative pattern for validation
    doc.setDrawColor(0, 150, 136); // Set the color for the pattern
    doc.setLineWidth(0.5);
    for (let i = 0; i < 10; i++) {
      const xStart = Math.random() * doc.internal.pageSize.getWidth();
      const yStart = 180 + Math.random() * 20;
      const xEnd = xStart + Math.random() * 40;
      const yEnd = yStart + Math.random() * 10;
      doc.line(xStart, yStart, xEnd, yEnd); // Draw random lines
    }
  
    // Save the PDF
    doc.save(`ticket-${ticket.ticketNumber}.pdf`);
  };
  
  // Function to generate a unique code
  const generateUniqueCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
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
