import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-2xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center">
          {/* Profile Photo */}
          <img
            src="/call-img.jpeg"   // ✅ Public folder wali file direct "/" se access hoti hai
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-blue-500"
          />

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Contact <span className="text-blue-600">Me</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Feel free to reach out to me for collaborations, projects, or just a friendly chat.  
            I'm always happy to connect with new people! 🚀
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
              <span className="text-blue-600 text-2xl">📧</span>
              <p className="text-gray-700 text-lg">abhishekyadav94380@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
              <span className="text-green-600 text-2xl">📞</span>
              <p className="text-gray-700 text-lg">+91 7488894380</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10">
            <p className="text-gray-500">
              💻 Designed with ❤️ by <span className="font-semibold text-gray-700">Abhishek Kumar</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
