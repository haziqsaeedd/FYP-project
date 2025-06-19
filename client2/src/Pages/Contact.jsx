import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Form - Left Side */}
        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-1">📩 Send Us a Message</h2>
          <p className="text-sm text-gray-600 mb-6">
            Fill out the form below and we’ll get back to you within 24 hours. For emergencies, please call us directly.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input type="text" placeholder="Enter your first name" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input type="text" placeholder="Enter your last name" className="w-full border px-3 py-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" placeholder="your.mail@example.com" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input type="tel" placeholder="(555) 123-4567" className="w-full border px-3 py-2 rounded" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Service Needed</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Select a service</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea placeholder="Please describe your service needs, including any urgent requirements..." rows="4" className="w-full border px-3 py-2 rounded"></textarea>
            </div>

            <div>
              <label className="block text-sm mb-1">Service Address</label>
              <input type="text" placeholder="123 Main St, City, State, ZIP" className="w-full border px-3 py-2 rounded" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold flex items-center justify-center gap-2"
            >
              <span>🚀</span> Send Message
            </button>
          </form>
        </div>

        {/* Right Side Info Boxes */}
        <div className="space-y-4">
          {/* Emergency Services */}
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <h3 className="text-lg font-semibold text-red-700">🚨 Emergency Services</h3>
            <p className="text-sm text-red-700 mb-3">Available 24/7 for urgent plumbing, electrical, and emergency repairs.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold w-full">
              📞 Emergency: (555) 911-HELP
            </button>
          </div>

          {/* Contact Information */}
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

          {/* Quick Booking */}
          <div className="bg-blue-100 p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800">⚡ Quick Booking</h3>
            <p className="text-sm text-blue-700 mb-3">Need service fast? Book online now!</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold w-full">
              💻 Schedule Service Online
            </button>
          </div>

          {/* Customer Reviews */}
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

export default ContactPage;
