import React, { useState } from 'react';

const NewTicketModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [customer, setCustomer] = useState('');
  const [priority, setPriority] = useState('LOW PRIORITY');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title,
      description: desc,
      customerName: customer,
      priority
    });
    setTitle(''); setDesc(''); setCustomer('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-[#001931] mb-6">Create New Ticket</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Customer Name</label>
            <input required type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} 
              className="w-full p-3 bg-gray-200 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Sahara Khatun"/>
          </div>

          {/* Priority Dropdown */}
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}
              className="w-full p-3 bg-gray-200 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500">
              <option value="LOW PRIORITY">Low</option>
              <option value="MEDIUM PRIORITY">Medium</option>
              <option value="HIGH PRIORITY">High</option>
            </select>
          </div>

          {/* Title Field */}
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Ticket Title</label>
            <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-gray-200 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Enter issue title..." placeholder:text-gray-400 outline-none transition-all />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Description</label>
            <textarea required rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}
              className="w-full p-3 bg-gray-200 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500" placeholder="Briefly explain the issue..."></textarea>
          </div>

          <div className="flex gap-4 pt-6">
            <button type="button" onClick={onClose} className="flex-1 py-3 font-bold text-gray-700">Cancel</button>
            <button type="submit" className="flex-1 py-3 bg-[#001931] text-white font-bold rounded-2xl hover:bg-blue-900 transition-all shadow-lg active:scale-95">Create Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketModal;