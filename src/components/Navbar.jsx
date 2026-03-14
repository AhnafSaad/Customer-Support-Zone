import { useState } from 'react';

const Navbar = ({onNewTicket}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 sticky top-0 z-50 px-4 md:px-16 py-4 border-b border-base-300">
    <div className="flex justify-between items-center h-12">
        <div className="flex justify-between items-center h-12 gap-2">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-circle"
        >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        <div className="text-lg md:text-xl font-bold text-base-content shrink-0">
        CS — Ticket System
        </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8">

        <ul className="hidden lg:flex gap-6 text-sm font-medium text-base-content">
            <li className="cursor-pointer transition hover:text-primary">Home</li>
            <li className="cursor-pointer transition hover:text-primary">FAQ</li>
            <li className="cursor-pointer transition hover:text-primary">Changelog</li>
            <li className="cursor-pointer transition hover:text-primary">Blog</li>
            <li className="cursor-pointer transition hover:text-primary">Download</li>
            <li className="cursor-pointer transition hover:text-primary">Contact</li>
        </ul>

        <button onClick={onNewTicket} className="btn btn-primary text-white px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm shrink-0">
            + New Ticket
        </button>
        </div>
    </div>
    <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-4 pb-4 text-sm font-medium text-base-content border-t border-base-300 pt-4">
            <li className="cursor-pointer transition hover:text-primary">Home</li>
            <li className="cursor-pointer transition hover:text-primary">FAQ</li>
            <li className="cursor-pointer transition hover:text-primary">Changelog</li>
            <li className="cursor-pointer transition hover:text-primary">Blog</li>
            <li className="cursor-pointer transition hover:text-primary">Download</li>
            <li className="cursor-pointer transition hover:text-primary">Contact</li>
        </ul>
    </div>
    </nav>
    );
};

export default Navbar;