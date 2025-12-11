import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider bg-white/20 inline-block px-3 py-1 rounded-full">
            🎓 Bulk Certificate Generator
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Create & Send Certificates in Minutes</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">First 100 FREE • Instant Delivery • Custom Designs • Secure Access Codes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Start Creating Free
            </Link>
            <a href="#pricing" className="bg-accent1 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Simple Pricing</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* FREE */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">FREE</h3>
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-gray-500 mb-6">1-100 attendees</p>
              <ul className="text-sm space-y-2 mb-8 text-gray-600">
                <li>✓ Basic Templates</li>
                <li>✓ Email Delivery</li>
                <li>✓ 30-day storage</li>
              </ul>
              <Link to="/dashboard" className="block w-full text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
                Select
              </Link>
            </div>

            {/* STARTER */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent1 relative hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-accent1 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">POPULAR</div>
              <h3 className="text-xl font-bold mb-4">STARTER</h3>
              <div className="text-4xl font-bold mb-2">$1</div>
              <p className="text-gray-500 mb-6">101-500 attendees</p>
              <ul className="text-sm space-y-2 mb-8 text-gray-600">
                <li>✓ All Templates</li>
                <li>✓ Custom Branding</li>
                <li>✓ Priority Support</li>
              </ul>
              <Link to="/dashboard" className="block w-full text-center py-2 bg-accent1 text-white rounded-lg hover:bg-opacity-90 transition">
                Select
              </Link>
            </div>

            {/* PRO */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">PRO</h3>
              <div className="text-4xl font-bold mb-2">$5</div>
              <p className="text-gray-500 mb-6">501-1000 attendees</p>
              <ul className="text-sm space-y-2 mb-8 text-gray-600">
                <li>✓ Analytics Dashboard</li>
                <li>✓ Longer Storage</li>
                <li>✓ API Access</li>
              </ul>
              <Link to="/dashboard" className="block w-full text-center py-2 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition">
                Select
              </Link>
            </div>

            {/* ENTERPRISE */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent2 hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">ENTERPRISE</h3>
              <div className="text-4xl font-bold mb-2">Custom</div>
              <p className="text-gray-500 mb-6">1001+ attendees</p>
              <ul className="text-sm space-y-2 mb-8 text-gray-600">
                <li>✓ Dedicated Manager</li>
                <li>✓ Custom Integrations</li>
                <li>✓ SLA</li>
              </ul>
              <button className="block w-full text-center py-2 border border-accent2 text-accent2 rounded-lg hover:bg-accent2 hover:text-white transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

       <footer className="bg-gray-800 text-white py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="font-bold text-xl">CertGen</span>
                <p className="text-sm text-gray-400">© 2024 Certificate Generator. All rights reserved.</p>
            </div>
             <div className="flex gap-4">
                 <Link to="/admin" className="text-gray-400 hover:text-white">Admin Login</Link>
                 <Link to="/access" className="text-gray-400 hover:text-white">Verify Certificate</Link>
             </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
