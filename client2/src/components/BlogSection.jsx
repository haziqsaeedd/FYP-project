import React from "react";
import blogData from "../utils/ObjectData/BlogData";

const BlogSection = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Recent Tips</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-gray-800 font-medium text-base">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    
    </section>
    
  );
 
};

export default BlogSection;
