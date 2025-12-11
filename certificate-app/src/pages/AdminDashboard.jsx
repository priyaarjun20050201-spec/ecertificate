import React from 'react';
import { Plus, Search, Filter, Calendar, Users, Eye, Mail, Download, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const batches = [
    {
        id: 1,
        name: 'Summer Workshop 2024',
        date: 'Dec 20, 2025',
        total: 250,
        accessed: 245,
        expires: '15 days',
        status: 'active'
    },
    {
        id: 2,
        name: 'Tech Conference 2024',
        date: 'Dec 11, 2025',
        total: 100,
        accessed: 89,
        expires: '8 days',
        status: 'warning' // < 7 days or specifically flagged
    },
    {
        id: 3,
        name: 'Design Bootcamp',
        date: 'Nov 01, 2025',
        total: 50,
        accessed: 50,
        expires: 'Expired',
        status: 'expired'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-primary text-white py-6 px-8 shadow-lg">
           <div className="max-w-6xl mx-auto flex justify-between items-center">
               <div className="flex items-center gap-4">
                   <Link to="/" className="hover:bg-white/10 p-2 rounded-full transition"><ArrowLeft size={20}/></Link>
                   <h1 className="text-2xl font-bold">Admin Dashboard</h1>
               </div>
               <div className="flex items-center gap-4">
                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">A</div>
                   <span className="font-medium">Organizer</span>
               </div>
           </div>
       </div>

       <div className="max-w-6xl mx-auto p-8">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
               <div>
                   <h2 className="text-xl font-bold text-gray-800">Your Batches</h2>
                   <p className="text-gray-500 text-sm">Manage your generated certificates</p>
               </div>
               <Link to="/dashboard" className="flex items-center gap-2 bg-accent1 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition transform hover:scale-105">
                   <Plus size={20} /> New Batch
               </Link>
           </div>

           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4">
               <div className="relative flex-1">
                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                   <input type="text" placeholder="Search batches..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
               </div>
               <div className="flex gap-2">
                   <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-white hover:bg-gray-50">
                       <Calendar size={16} /> Date
                   </button>
                   <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-white hover:bg-gray-50">
                       <Filter size={16} /> All Status
                   </button>
               </div>
           </div>

           <div className="space-y-4">
               {batches.map((batch) => (
                   <div key={batch.id} className="bg-white rounded-xl shadow-sm border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col md:flex-row">
                       <div className={`w-full md:w-2 ${
                           batch.status === 'active' ? 'bg-primary' :
                           batch.status === 'warning' ? 'bg-accent3' : 'bg-accent2'
                       }`}></div>

                       <div className="p-6 flex-1">
                           <div className="flex justify-between items-start mb-2">
                               <h3 className="font-bold text-lg text-gray-800">{batch.name}</h3>
                               <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                                    batch.status === 'active' ? 'bg-green-100 text-primary' :
                                    batch.status === 'warning' ? 'bg-red-100 text-accent3' : 'bg-gray-100 text-gray-500'
                               }`}>
                                   Expires: {batch.expires}
                               </span>
                           </div>

                           <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                               <div className="flex items-center gap-1">
                                   <Users size={14} /> {batch.total} certificates
                               </div>
                               <div className="flex items-center gap-1">
                                   <Eye size={14} /> {batch.accessed} accessed
                               </div>
                               <div className="flex items-center gap-1">
                                   <Calendar size={14} /> Created: {batch.date}
                               </div>
                           </div>

                           <div className="flex gap-2 border-t border-gray-100 pt-4">
                               <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 rounded transition">
                                   <Eye size={14} /> View
                               </button>
                               <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 rounded transition">
                                   <Mail size={14} /> Resend Emails
                               </button>
                               <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 rounded transition">
                                   <Download size={14} /> Download
                               </button>
                               <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 rounded transition ml-auto">
                                   <Trash2 size={14} /> Delete
                               </button>
                           </div>
                       </div>
                   </div>
               ))}
           </div>
       </div>
    </div>
  );
};

export default AdminDashboard;
