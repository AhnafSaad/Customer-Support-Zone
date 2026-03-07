import React, { useState } from 'react';

const TicketList = ({ tickets, onSelect, taskStatus, onComplete, resolvedTasks }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const handleSeeMore = () => {
    setVisibleCount(
      prevCount => prevCount + 5
    );
  };
  return (
    <div className="bg-[#F5F5F5] px-4 md:px-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-[#001931] mb-6">Customer Tickets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.slice(0, visibleCount).map((ticket) => (
              <div 
                key={ticket.id} 
                onClick={() => onSelect(ticket)}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all h-full"
              >
                
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-[#001931] text-[16px] leading-tight flex-1">{ticket.title}</h3>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${ticket.status === 'Open' ? 'text-[#02A53B] bg-[#E6F6EC]' :ticket.status === 'In-Progress' ? 'text-[#0052CC] bg-[#E9F2FF]': 'text-[#FEBB0C] bg-[#FFF8E6]'}`}>
                    {ticket.status}
                  </span>
                </div>
                <p className="text-[#627382] text-[12px] mb-5 line-clamp-2">{ticket.description}</p>
                
                <div className="flex justify-between items-center text-[10px] font-bold border-t border-gray-50 pt-3">
                  <span className='text-gray-400'>#{ticket.id}</span>
                  <span className={`text-[10px] font-bold ${
                  ticket.priority === 'HIGH PRIORITY' ? 'text-[#F83044]' : 
                  ticket.priority === 'MEDIUM PRIORITY' ? 'text-[#FEBB0C]' :  'text-[#02A53B]'  
                  }`}>
                      {ticket.priority}
                  </span>
                  <div className="flex gap-2 text-[#627382]">
                    <span>{ticket.customer}</span>
                    <span>📅 {ticket.createdAt}</span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          {visibleCount < tickets.length && (
            <div className="flex justify-center mt-10">
              <button onClick={() => setVisibleCount(visibleCount + 5)} className="bg-[#001931] text-white px-8 py-3 rounded-full font-bold">
                See More Tickets
              </button>
            </div>
          )}
        </div>
        <div className="lg:col-span-1 order-1 lg:order-2 flex flex-col gap-6">
          
          {/* ১. Task Status */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#001931] mb-4">Task Status</h2>
            <div className="space-y-3">
              {taskStatus.length > 0 ? taskStatus.map(t => (
                <div key={t.id} className="p-3 bg-blue-50 rounded-lg flex justify-between items-center border border-blue-100">
                  <span className="font-bold text-xs text-[#001931]">{t.title}</span>
                  <button onClick={() => onComplete(t)} className="bg-green-500 text-white text-[10px] px-2 py-1 rounded font-bold">Complete</button>
                </div>
              )) : (
                <p className="text-gray-400 text-xs italic text-center py-6 border-2 border-dashed border-gray-50 rounded-xl">Select a ticket to start</p>
              )}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#001931]">Resolved Task</h2>
              <span className="bg-[#E6F6EC] text-[#02A53B] text-[10px] font-bold px-2 py-0.5 rounded-full">
                {resolvedTasks.length} Completed
              </span>
            </div>

            <div className="space-y-3">
              {resolvedTasks.length > 0 ? (
              resolvedTasks.map((t) => (
                <div 
                   key={t.id} 
                     className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-gray-50 hover:border-green-100 transition-all group"
                  >
                <div className="w-8 h-8 rounded-full bg-[#E6F6EC] flex items-center justify-center shrink-0">
                 <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#02A53B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
          
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[#334155] text-[13px] truncate">
              {t.title}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                ID: #{t.id}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="text-[9px] font-bold text-[#02A53B] uppercase">
                Successfully Resolved
              </span>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-[#627382] text-xs italic py-10 border-2 border-dashed border-gray-50 rounded-2xl text-center bg-gray-50/50">
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