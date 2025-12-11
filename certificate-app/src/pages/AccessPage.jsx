import React, { useState } from 'react';
import { Download, Share2, Printer, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessPage = () => {
  const [code, setCode] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (code.length > 3) {
        // Mock finding a certificate
        setCertificate({
            name: 'John Doe',
            event: 'Summer Workshop 2024',
            date: 'Dec 20, 2025'
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-green-50 to-white">
      <div className="w-full max-w-2xl">
        <Link to="/" className="mb-8 block text-center font-bold text-2xl text-primary">CertGen</Link>

        {!certificate ? (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-center">
                <h1 className="text-3xl font-bold mb-2 text-gray-800">Access Your Certificate</h1>
                <p className="text-gray-500 mb-8">Enter the unique access code sent to your email</p>

                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        className="w-full text-center text-xl tracking-widest p-4 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none mb-6 uppercase transition"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button type="submit" className="w-full py-4 bg-accent1 text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-lg text-lg">
                        View Certificate
                    </button>
                </form>

                <div className="mt-8 text-sm text-gray-400">
                    Didn't receive your code? <button className="text-primary hover:underline">Resend to Email</button>
                </div>
            </div>
        ) : (
            <div className="animate-fade-in-up">
                <div className="bg-white p-2 rounded-xl shadow-2xl mb-8">
                     {/* Mock Certificate Visual */}
                     <div className="aspect-[1.4] bg-white border-8 border-double border-gray-200 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-primary rounded-tl-3xl m-4"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-secondary rounded-br-3xl m-4"></div>

                        <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 mx-auto"></div>
                        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">Certificate of Completion</h2>
                        <p className="text-gray-500 mb-8 italic">This is to certify that</p>

                        <h3 className="text-5xl font-script font-bold text-primary mb-8 font-heading">{certificate.name}</h3>

                        <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
                            Has successfully completed the <strong>{certificate.event}</strong> on {certificate.date}.
                        </p>

                        <div className="w-32 h-1 border-b-2 border-gray-300 mx-auto mb-2"></div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">Director Signature</div>
                     </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div>
                        <h3 className="font-bold text-gray-800">Congratulations, {certificate.name}!</h3>
                        <p className="text-sm text-gray-500">Issued on {certificate.date}</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
                            <Download size={18} /> Download PDF
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition">
                            <Share2 size={18} /> Share
                        </button>
                         <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition">
                            <Printer size={18} />
                        </button>
                    </div>
                </div>

                <button onClick={() => setCertificate(null)} className="mt-8 mx-auto block text-gray-400 hover:text-gray-600">
                    Search another code
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default AccessPage;
