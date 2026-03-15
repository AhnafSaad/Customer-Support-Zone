import React, { useState } from 'react';
import TicketDetailsModal from './TicketDetailsModal';

const TicketList = ({ tickets, onSelect, taskStatus, onComplete, resolvedTasks }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const getPriorityBadge = (priority) => {
    if (priority === 'HIGH PRIORITY') return 'badge-error';
    if (priority === 'MEDIUM PRIORITY') return 'badge-warning';
    return 'badge-success';
  };

  const getStatusBadge = (status) => {
    if (status === 'Open') return 'badge-success';
    if (status === 'In-Progress') return 'badge-info';
    return 'badge-warning';
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsDetailsModalOpen(true);
  };

  const handleStartWorking = (ticket) => {
    onSelect(ticket);
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === 'All' ||
      (priorityFilter === 'High' && ticket.priority === 'HIGH PRIORITY') ||
      (priorityFilter === 'Medium' && ticket.priority === 'MEDIUM PRIORITY') ||
      (priorityFilter === 'Low' && ticket.priority === 'LOW PRIORITY');

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="bg-base-100 px-4 md:px-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-base-content mb-6">Customer Tickets</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by title or customer..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(10);
              }}
              className="input input-bordered flex-1"
            />
            <select
              value={priorityFilter}
              onChange={(e) => {
                setPriorityFilter(e.target.value);
                setVisibleCount(10);
              }}
              className="select select-bordered min-w-max"
            >
              <option value="All">All Priorities</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTickets.slice(0, visibleCount).map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleTicketClick(ticket)}
                className="card bg-gray-900 shadow-sm border border-gray-800 cursor-pointer hover:shadow-md transition-all h-full"
              >
                <div className="card-body p-5">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="card-title text-[16px] leading-tight flex-1 text-white">{ticket.title}</h3>
                    <div className={`badge badge-sm ${getStatusBadge(ticket.status)}`}>
                      {ticket.status}
                    </div>
                  </div>

                  <p className="text-gray-300 text-[12px] mb-5 line-clamp-2">{ticket.description}</p>

                  <div className="flex justify-between items-center text-[10px] font-bold border-t border-gray-700 pt-3">
                    <span className='text-gray-400'>#{ticket.id}</span>
                    <div className={`badge badge-sm text-[10px] px-2 py-1 ${getPriorityBadge(ticket.priority)}`}>
                      {ticket.priority}
                    </div>
                    <div className="flex gap-2 text-gray-300">
                      <span>{ticket.customer}</span>
                      <span>📅 {ticket.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredTickets.length === 0 && (
            <div className="text-center py-10 text-base-content/70 bg-base-100">
              <p className="text-sm">No tickets found matching your search and filters.</p>
            </div>
          )}
          {visibleCount < filteredTickets.length && (
            <div className="flex justify-center mt-10">
              <button onClick={() => setVisibleCount(visibleCount + 5)} className="btn btn-primary">
                See More Tickets
              </button>
            </div>
          )}
        </div>

        <TicketDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          ticket={selectedTicket}
          onStartWorking={handleStartWorking}
        />

        <div className="lg:col-span-1 order-1 lg:order-2 flex flex-col gap-6">

          <div className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm">
            <h2 className="text-xl font-bold text-base-content mb-4">Task Status</h2>
            <div className="space-y-3">
              {taskStatus.length > 0 ? taskStatus.map(t => (
                <div key={t.id} className="p-3 bg-info/10 rounded-lg flex justify-between items-center border border-info/30">
                  <span className="font-bold text-xs text-base-content">{t.title}</span>
                  <button onClick={() => onComplete(t)} className="btn btn-success btn-xs text-white">Complete</button>
                </div>
              )) : (
                <p className="text-base-content/50 text-xs italic text-center py-6 border-2 border-dashed border-base-300 rounded-xl">Select a ticket to start</p>
              )}
            </div>
          </div>
          <div className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm">
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-base-content">Resolved Task</h2>
              <span className="badge badge-success text-[10px] font-bold">
                {resolvedTasks.length} Completed
              </span>
            </div>

            <div className="space-y-3">
              {resolvedTasks.length > 0 ? (
              resolvedTasks.map((t) => (
                <div
                   key={t.id}
                     className="flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-300 hover:border-success transition-all group"
                  >
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                 <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success"/>
                </svg>
                </div>

          <div className="flex-1 min-w-0">
            <p className="font-bold text-base-content text-[13px] truncate">
              {t.title}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[9px] font-bold text-base-content/60 uppercase tracking-wider">
                ID: #{t.id}
              </span>
              <span className="w-1 h-1 rounded-full bg-base-content/30"></span>
              <span className="text-[9px] font-bold text-success uppercase">
                Successfully Resolved
              </span>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-base-content/50 text-xs italic py-10 border-2 border-dashed border-base-300 rounded-2xl text-center bg-base-100">
        No tasks resolved yet.
      </div>
    )}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default TicketList;