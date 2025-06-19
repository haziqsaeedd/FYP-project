import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api"; // Axios instance
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    address: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('❌ Please fill in all required fields.');
      return;
    }

    const contactData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone || '',
      service: form.service || 'Other',
      message: form.message,
      address: form.address || '',
    };

    try {
      const res = await api.post('/contact/submit', contactData);
      setSuccess(res.data.message || '✅ Message sent successfully!');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        address: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || '❌ Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Form Section */}
        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-1">📩 Send Us a Message</h2>
          <p className="text-sm text-gray-600 mb-6">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>

          {!user ? (
            <p className="text-red-500 text-sm font-semibold">🔒 Please log in to submit a service request.</p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full border px-3 py-2 rounded"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full border px-3 py-2 rounded"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your.mail@example.com"
                    className="w-full border px-3 py-2 rounded"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full border px-3 py-2 rounded"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Service Needed</label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="HVAC">HVAC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  placeholder="Describe your service needs..."
                  rows="4"
                  className="w-full border px-3 py-2 rounded"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm mb-1">Service Address</label>
                <input
                  type="text"
                  placeholder="123 Main St, City, ZIP"
                  className="w-full border px-3 py-2 rounded"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>

              {/* Feedback Message */}
              {error && <p className="text-sm font-semibold text-center text-red-600">{error}</p>}
              {success && <p className="text-sm font-semibold text-center text-green-600">{success}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold flex items-center justify-center gap-2"
              >
                🚀 Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Info Section */}
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <h3 className="text-lg font-semibold text-red-700">🚨 Emergency Services</h3>
            <p className="text-sm text-red-700 mb-3">Available 24/7 for urgent plumbing, electrical, and emergency repairs.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold w-full">
              📞 Emergency: (555) 911-HELP
            </button>
          </div>
          <div className="bg-white border p-4 rounded shadow-sm space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">📞 Contact Information</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>📱 General Line:</strong> (555) 123-4567</p>
              <p><strong>📧 Email:</strong> info@homeservices.com</p>
              <p><strong>📍 Service Area:</strong> Greater Metro Area</p>
              <p className="pl-6">Within 50 miles of downtown</p>
              <p><strong>🕒 Business Hours:</strong></p>
              <ul className="pl-6 list-disc">
                <li>Mon–Fri: 7:00 AM – 8:00 PM</li>
                <li>Saturday: 8:00 AM – 6:00 PM</li>
                <li>Sunday: 9:00 AM – 5:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800">⚡ Quick Booking</h3>
            <p className="text-sm text-blue-700 mb-3">Need service fast? Book online now!</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold w-full">
              💻 Schedule Service Online
            </button>
          </div>
          <div className="bg-white border p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-600">⭐ Customer Reviews</h3>
            <p className="text-yellow-500">★ 4.9/5 from 500+ reviews</p>
            <p className="text-sm italic text-gray-700 mt-2">
              "Professional, reliable, and fair pricing. They fixed our plumbing emergency the same day we called!"
            </p>
            <p className="text-xs text-gray-500 mt-1">– Sarah M., Local Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
