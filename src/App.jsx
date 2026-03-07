import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewTicketModal from './components/NewTicketModal';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import Footer from './components/Footer';
import ticketsData from './tickets.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskStatus, setTaskStatus] = useState([]); 
  const [resolvedTasks, setResolvedTasks] = useState([]); 

  const handleSelectTicket = (ticket) => {
    setTaskStatus([...taskStatus, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.info("Ticket added to Task Status!");
  };

  const handleAddTicket = (newTicketData) => {
  const newId = tickets.length > 0 ?
  Math.max(...tickets.map(t => t.id)) + 1:1001;
  
  const finalTicket = {
    id: newId, 
    title:newTicketData.title,
    status: "Open",
    description:newTicketData.description,
    priority:newTicketData.priority,
    customer:newTicketData.customer,
    createdAt: new Date().toLocaleDateString()
  };

  setTickets([finalTicket, ...tickets]);
  setIsModalOpen(false);
  toast.success(`Ticket #${newId} created successfully!`);
};

  const handleCompleteTask = (ticket) => {
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    toast.success("Task Resolved Successfully!");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-[#F5F5F5] font-sans'>
      <Navbar onNewTicket={() =>
        setIsModalOpen(true)
      } />
      <NewTicketModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAdd={handleAddTicket}
      />
      <Banner 
        inProgressCount={taskStatus.length} 
        resolvedCount={resolvedTasks.length} 
      />
      <TicketList 
        tickets={tickets} 
        onSelect={handleSelectTicket} 
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onComplete={handleCompleteTask} 
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;