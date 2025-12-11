import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Upload, FileText, CheckCircle, CreditCard, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

const Step1DesignMethod = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Step 1: Choose Your Certificate Design</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div
          onClick={() => onNext('upload')}
          className="bg-white p-8 rounded-xl shadow-md border-2 border-transparent hover:border-accent1 cursor-pointer transition flex flex-col items-center text-center group"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-orange-100 group-hover:text-accent1 transition">
            <Upload size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">UPLOAD YOUR DESIGN</h3>
          <p className="text-gray-500 mb-6">Custom branding • Full control</p>
          <button className="px-6 py-2 border border-primary text-primary rounded-lg group-hover:bg-accent1 group-hover:border-accent1 group-hover:text-white transition">
            Upload Design
          </button>
        </div>

        <div
          onClick={() => onNext('template')}
          className="bg-white p-8 rounded-xl shadow-md border-2 border-transparent hover:border-accent1 cursor-pointer transition flex flex-col items-center text-center group"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-orange-100 group-hover:text-accent1 transition">
            <FileText size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">USE TEMPLATE</h3>
          <p className="text-gray-500 mb-6">Pre-designed • Quick setup</p>
          <button className="px-6 py-2 border border-primary text-primary rounded-lg group-hover:bg-accent1 group-hover:border-accent1 group-hover:text-white transition">
            Browse Templates
          </button>
        </div>
      </div>
    </div>
  );
};

const Step2Upload = ({ onBack, onNext }) => {
  return (
    <div className="max-w-3xl mx-auto">
       <h2 className="text-2xl font-bold mb-6 text-center">Step 2: Upload & Customize</h2>

       <div className="border-2 border-dashed border-secondary bg-green-50 rounded-xl p-12 text-center hover:bg-green-100 transition cursor-pointer mb-8">
          <Upload className="mx-auto text-secondary mb-4" size={48} />
          <h3 className="text-lg font-bold text-gray-700 mb-2">Drag & Drop Your Certificate</h3>
          <p className="text-gray-500 text-sm">or Click to Browse</p>
          <p className="text-gray-400 text-xs mt-4">Supported: JPG, PNG, PDF (Max 10MB)</p>
       </div>

       <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
          <h4 className="font-bold mb-4">Certificate Preview</h4>
          <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg border border-gray-300 relative">
             <span className="text-gray-400">Image Preview</span>
             {/* Mock placeholder overlay */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-accent1 px-4 py-2 bg-white/80 text-accent1 text-sm font-bold cursor-move">
               Participant Name
             </div>
          </div>
       </div>

       <div className="flex justify-between">
          <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
             <ArrowLeft size={18} /> Back
          </button>
          <button onClick={onNext} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 shadow-lg">
             Continue <ArrowRight size={18} />
          </button>
       </div>
    </div>
  );
};

const Step2Template = ({ onBack, onNext }) => {
    return (
      <div className="max-w-4xl mx-auto">
         <h2 className="text-2xl font-bold mb-6 text-center">Step 2: Select Template</h2>

         <div className="flex gap-4 justify-center mb-8">
            {['All', 'Professional', 'Academic', 'Corporate'].map((filter, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium ${idx === 0 ? 'bg-accent2 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                    {filter}
                </button>
            ))}
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`bg-white p-4 rounded-xl shadow-sm border-2 cursor-pointer transition ${i === 2 ? 'border-primary ring-2 ring-primary ring-opacity-20' : 'border-transparent hover:border-accent1'}`}>
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                        Template {i}
                    </div>
                    <button className={`w-full py-2 rounded-lg text-sm font-bold ${i === 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {i === 2 ? 'Selected' : 'Use'}
                    </button>
                </div>
            ))}
         </div>

         <div className="flex justify-between">
            <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
               <ArrowLeft size={18} /> Back
            </button>
            <button onClick={onNext} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 shadow-lg">
               Continue <ArrowRight size={18} />
            </button>
         </div>
      </div>
    );
  };

const Step3Attendee = ({ onBack, onNext }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 3: Upload Attendee List</h2>

            <div className="border-2 border-dashed border-secondary bg-green-50 rounded-xl p-8 text-center hover:bg-green-100 transition cursor-pointer mb-8">
                <FileText className="mx-auto text-secondary mb-4" size={48} />
                <h3 className="text-lg font-bold text-gray-700 mb-2">Upload CSV/Excel File</h3>
                <p className="text-gray-500 text-sm mb-4">Required: Name, Email</p>
                <button className="text-primary underline text-sm">Download Sample Template</button>
            </div>

            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 mb-4">
                 <div>
                     <div className="text-sm text-gray-500">Attendee Count</div>
                     <div className="text-2xl font-bold text-primary">127</div>
                 </div>
                 <div className="text-right">
                    <div className="text-sm text-gray-500">Your Plan: FREE (100 limit)</div>
                 </div>
            </div>

            <div className="bg-accent3/10 border border-accent3 text-accent3 p-4 rounded-lg mb-8 flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                    <span className="font-bold">Limit Exceeded:</span> You have 127 attendees. Upgrade to STARTER plan for just $1 to continue.
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                 <table className="w-full text-sm text-left">
                     <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
                         <tr>
                             <th className="px-6 py-3">Name</th>
                             <th className="px-6 py-3">Email</th>
                             <th className="px-6 py-3">Role</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                         <tr>
                             <td className="px-6 py-3">John Doe</td>
                             <td className="px-6 py-3">john@email.com</td>
                             <td className="px-6 py-3">Speaker</td>
                         </tr>
                         <tr className="bg-gray-50/50">
                             <td className="px-6 py-3">Jane Smith</td>
                             <td className="px-6 py-3">jane@email.com</td>
                             <td className="px-6 py-3">Attendee</td>
                         </tr>
                         <tr>
                             <td className="px-6 py-3">Robert Johnson</td>
                             <td className="px-6 py-3">robert@test.com</td>
                             <td className="px-6 py-3">Attendee</td>
                         </tr>
                     </tbody>
                 </table>
            </div>

            <div className="flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <ArrowLeft size={18} /> Back
                </button>
                <button onClick={onNext} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 shadow-lg">
                    Continue <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

const Step4Payment = ({ onBack, onNext }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 4: Payment</h2>

            <div className="bg-secondary text-white p-6 rounded-xl mb-8 shadow-lg">
                <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Order Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="opacity-80 block">Attendees</span>
                        <span className="font-bold text-lg">250</span>
                    </div>
                    <div>
                        <span className="opacity-80 block">Plan</span>
                        <span className="font-bold text-lg">STARTER</span>
                    </div>
                    <div className="col-span-2 mt-2 pt-2 border-t border-white/20">
                         <span className="opacity-80 block">Total Amount</span>
                         <span className="font-bold text-3xl">$1.00</span>
                    </div>
                </div>
            </div>

            <h3 className="font-bold text-gray-700 mb-4">Select Payment Method</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border-2 border-primary bg-green-50 p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center h-32">
                    <CreditCard className="text-primary mb-2" size={24} />
                    <span className="font-bold text-gray-800">Paystack</span>
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
                <div className="border border-gray-200 hover:border-accent1 p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center h-32 transition">
                    <CreditCard className="text-gray-400 mb-2" size={24} />
                    <span className="font-bold text-gray-600">Flutterwave</span>
                </div>
                <div className="border border-gray-200 hover:border-accent1 p-4 rounded-xl cursor-pointer flex flex-col items-center justify-center h-32 transition">
                    <Mail className="text-gray-400 mb-2" size={24} />
                    <span className="font-bold text-gray-600">Manual</span>
                </div>
            </div>

            <div className="flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <ArrowLeft size={18} /> Back
                </button>
                <button onClick={onNext} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 shadow-lg w-full md:w-auto justify-center">
                    Proceed to Payment <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

const Step5Success = () => {
    return (
        <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex p-4 rounded-full bg-green-100 text-primary">
                <CheckCircle size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-primary">Certificates Generated Successfully!</h2>
            <p className="text-gray-500 mb-8">Your batch has been processed and emails are being sent.</p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 text-left">
                <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-secondary" /> 250 certificates created
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-secondary" /> Unique access codes generated
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-secondary" /> Emails queued for delivery
                    </li>
                </ul>

                <div className="mb-2 flex justify-between text-sm font-semibold text-gray-600">
                    <span>Sending Status</span>
                    <span>70%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[70%]"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                <button className="px-6 py-3 border border-accent2 text-accent2 rounded-lg font-bold hover:bg-accent2 hover:text-white transition">
                    📥 Download All (ZIP)
                </button>
                <button className="px-6 py-3 border border-accent2 text-accent2 rounded-lg font-bold hover:bg-accent2 hover:text-white transition">
                    📋 Download Codes (CSV)
                </button>
            </div>

            <div className="text-sm text-gray-400 bg-gray-50 py-4 px-6 rounded-lg inline-block">
                ⏰ Certificates will be deleted after 30 days (January 19, 2026)
            </div>

            <div className="mt-8">
                 <Link to="/dashboard" className="text-primary font-bold hover:underline">Create New Batch</Link>
            </div>
        </div>
    );
};
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [step, setStep] = useState(1);
  const [designMethod, setDesignMethod] = useState(null); // 'upload' | 'template'

  const handleNext = (data) => {
    if (step === 1 && data) setDesignMethod(data);
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 mb-8 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
              <Link to="/" className="font-bold text-xl text-primary">CertGen</Link>
              <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map(s => (
                          <div key={s} className={`w-3 h-3 rounded-full ${s <= step ? 'bg-primary' : 'border border-gray-300'}`}></div>
                      ))}
                  </div>
                  <div className="text-sm font-medium text-gray-500">Step {step} of 5</div>
              </div>
          </div>
      </div>

      <div className="px-6">
        {step === 1 && <Step1DesignMethod onNext={handleNext} />}
        {step === 2 && designMethod === 'upload' && <Step2Upload onBack={handleBack} onNext={() => handleNext()} />}
        {step === 2 && designMethod === 'template' && <Step2Template onBack={handleBack} onNext={() => handleNext()} />}
        {step === 3 && <Step3Attendee onBack={handleBack} onNext={() => handleNext()} />}
        {step === 4 && <Step4Payment onBack={handleBack} onNext={() => handleNext()} />}
        {step === 5 && <Step5Success />}
      </div>
    </div>
  );
};

export default Dashboard;
