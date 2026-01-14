import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/40">
          
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
            🔐 Privacy <span className="text-blue-600">Policy</span>
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
            We value your privacy and are committed to protecting your personal information. 
            Please take a moment to read how we handle, use, and protect your data. 🚀
          </p>

          {/* Sections */}
          <div className="space-y-8">
            <div className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">📋 Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect personal details such as your name, email, and phone number 
                when you interact with our services. We may also collect non-personal 
                data such as browser type, device information, and usage analytics.
              </p>
            </div>

            <div className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">⚙️ How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information is used to improve our services, respond to your queries, 
                send updates, and ensure the best user experience. We will never sell your 
                personal information to third parties.
              </p>
            </div>

            <div className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">🛡️ Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We use industry-standard security measures to protect your data. 
                However, no online transmission is 100% secure, so please use our 
                services with awareness.
              </p>
            </div>

            <div className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">⚖️ Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your information. 
                To exercise your rights, reach out to us using the contact details below.
              </p>
            </div>

            <div className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">📞 Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Got questions? Feel free to contact us at <br />
                <span className="font-medium text-blue-600">📧 abhishekyadav94380@gmail.com</span> <br />
                <span className="font-medium text-green-600">📱 +91 7488894380</span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold">Abhishek Kumar</span> | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
