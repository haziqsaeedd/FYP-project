import React from "react";

const ExpertTips = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Tips & Insights</h1>
        <p className="text-gray-600 text-sm">
          Stay informed with our latest articles on home maintenance, DIY tips, and professional advice
        </p>

        {/* Search Filter */}
        <div className="mt-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search articles..."
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Filter</button>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mb-10">
        <span className="inline-block text-xs font-semibold text-blue-600 mb-2">Featured Article</span>
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
          <div className="h-48 bg-gray-300 flex justify-center items-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="p-6">
            <div className="text-sm text-blue-600 font-semibold mb-1">Plumbing</div>
            <div className="text-xs text-gray-500 mb-2">March 15, 2024 • 4 min read</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5 Signs You Need Emergency Plumbing Services</h2>
            <p className="text-sm text-gray-600 mb-4">
              Don’t wait until it’s too late. Learn the warning signs that indicate you need immediate plumbing attention.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Read Article</button>
          </div>
        </div>
      </div>

      {/* Grid Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Article 1 */}
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
          <div className="h-48 bg-gray-300 flex justify-center items-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="p-6">
            <div className="text-sm text-blue-600 font-semibold mb-1">Electrical</div>
            <div className="text-xs text-gray-500 mb-2">March 12, 2024 • 6 min read</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Electrical Safety Tips Every Homeowner Should Know</h3>
            <p className="text-sm text-gray-600 mb-4">
              Keep your family safe with these essential electrical safety guidelines and prevention tips.
            </p>
            <a href="#" className="text-blue-600 font-semibold text-sm">Read More</a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
          <div className="h-48 bg-gray-300 flex justify-center items-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="p-6">
            <div className="text-sm text-blue-600 font-semibold mb-1">House Cleaning</div>
            <div className="text-xs text-gray-500 mb-2">March 10, 2024 • 8 min read</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Spring Cleaning Checklist: Room by Room Guide</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get your home sparkling clean this spring with our comprehensive room-by-room cleaning checklist.
            </p>
            <a href="#" className="text-blue-600 font-semibold text-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTips;
