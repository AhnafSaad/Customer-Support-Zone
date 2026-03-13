import React, { useState, useEffect, useRef } from 'react';

const NewTicketModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [customer, setCustomer] = useState('');
  const [priority, setPriority] = useState('LOW PRIORITY');
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title,
      description: desc,
      customer,
      priority
    });
    setTitle('');
    setDesc('');
    setCustomer('');
    setPriority('LOW PRIORITY');
    onClose();
  };

  const handleClose = () => {
    setTitle('');
    setDesc('');
    setCustomer('');
    setPriority('LOW PRIORITY');
    onClose();
  };

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md rounded-3xl">
        <h2 className="text-2xl font-bold text-[#001931] mb-6">Create New Ticket</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[10px] font-bold text-gray-600 uppercase">Customer Name</span>
            </label>
            <input
              required
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="input input-bordered w-full bg-gray-100"
              placeholder="e.g. Sahara Khatun"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[10px] font-bold text-gray-600 uppercase">Priority</span>
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="select select-bordered w-full bg-gray-100"
            >
              <option value="LOW PRIORITY">Low</option>
              <option value="MEDIUM PRIORITY">Medium</option>
              <option value="HIGH PRIORITY">High</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[10px] font-bold text-gray-600 uppercase">Ticket Title</span>
            </label>
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full bg-gray-100"
              placeholder="Enter issue title..."
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[10px] font-bold text-gray-600 uppercase">Description</span>
            </label>
            <textarea
              required
              rows="3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="textarea textarea-bordered w-full bg-gray-100"
              placeholder="Briefly explain the issue..."
            ></textarea>
          </div>

          <div className="modal-action">
            <button type="button" onClick={handleClose} className="btn btn-ghost">Cancel</button>
            <button type="submit" className="btn bg-[#001931] text-white hover:bg-blue-900">Create Ticket</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
};

export default NewTicketModal;