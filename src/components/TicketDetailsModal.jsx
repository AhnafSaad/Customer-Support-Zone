import React, { useState, useEffect, useRef } from 'react';

const TicketDetailsModal = ({ isOpen, onClose, ticket, onStartWorking }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const getPriorityColor = (priority) => {
    if (priority === 'HIGH PRIORITY') return 'badge-error';
    if (priority === 'MEDIUM PRIORITY') return 'badge-warning';
    return 'badge-success';
  };

  const getStatusColor = (status) => {
    if (status === 'Open') return 'badge-success';
    if (status === 'In-Progress') return 'badge-info';
    return 'badge-warning';
  };

  const handleStartWorking = () => {
    onStartWorking(ticket);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-2xl rounded-3xl">
        {ticket && (
          <>
            <div className="flex justify-between items-start mb-6 gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#001931]">{ticket.title}</h2>
                <p className="text-gray-500 text-sm mt-1">Ticket ID: #{ticket.id}</p>
              </div>
              <div className={`badge badge-md ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-gray-600 uppercase block mb-2">Description</label>
                <p className="text-[#627382] text-sm leading-relaxed">{ticket.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-600 uppercase block mb-2">Customer</label>
                  <p className="text-[#001931] font-semibold">{ticket.customer}</p>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-600 uppercase block mb-2">Priority</label>
                  <div className={`badge badge-lg ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-600 uppercase block mb-2">Created</label>
                <p className="text-[#627382]">📅 {ticket.createdAt}</p>
              </div>
            </div>

            <div className="modal-action mt-8">
              <button onClick={handleClose} className="btn btn-ghost">Close</button>
              <button onClick={handleStartWorking} className="btn bg-[#001931] text-white hover:bg-blue-900">Start Working</button>
            </div>
          </>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
};

export default TicketDetailsModal;
