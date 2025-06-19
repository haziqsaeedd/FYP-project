import React, { useState } from 'react';
import axios from 'axios';
import { electricityCards } from '../../utils/ObjectData/CardData';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const Electricity = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: 'Electricity',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await axios.post('http://localhost:5000/api/contact/submit', form);
      setStatus(res.data.message);
      setForm({ firstName: '', lastName: '', email: '', phone: '', address: '', service: 'Electricity', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send message');
    }
  };

  return (
    <div className="p-6">
      {/* Top Heading Section */}
      <h1 className="text-3xl font-bold text-blue-800 mb-2">Electricity Services</h1>
      <p className="text-gray-600 mb-6">We offer reliable electrical services for both residential and commercial clients. Book now or explore our services below.</p>

      {/* Booking Form */}
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">📋 Book an Electrician</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
          <input type="text" placeholder="Last Name" className="border p-2 rounded" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
          <input type="email" placeholder="Email" className="border p-2 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input type="tel" placeholder="Phone" className="border p-2 rounded" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input type="text" placeholder="Address" className="border p-2 rounded col-span-full" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <textarea placeholder="Describe your electrical issue..." className="border p-2 rounded col-span-full" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
          {status && <p className={`text-sm font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'} col-span-full`}>{status}</p>}
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 col-span-full">Send Request</button>
        </form>
      </div>

      {/* Service Cards Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">⚙️ Select Your Desired Service Now!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {electricityCards.map((service, idx) => (
          <div
            key={idx}
            onClick={() => navigate(service.route)} // ✅ Navigate on click
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricity;
