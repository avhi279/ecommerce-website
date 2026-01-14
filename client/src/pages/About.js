import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            About <span className="text-blue-600">Us</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Welcome to our platform! 🚀  
            We are passionate about creating powerful and user-friendly web solutions.  
            Our mission is to deliver **quality, performance, and innovation** in everything we build.  
          </p>

          {/* 3 Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">💡 Innovation</h3>
              <p className="text-gray-600">
                We believe in bringing fresh ideas and modern technologies to solve real problems.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">⚡ Performance</h3>
              <p className="text-gray-600">
                Our solutions are optimized for **speed, scalability, and security**.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">🤝 Support</h3>
              <p className="text-gray-600">
                We are always here to support and guide you through your digital journey.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10">
            <p className="text-gray-500">
              💻 Crafted with ❤️ by <span className="font-semibold text-gray-700">Our Team</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
