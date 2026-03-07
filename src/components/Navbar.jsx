import { useState } from 'react';

const Navbar = ({onNewTicket}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 px-4 md:px-16 py-4">
    <div className="flex justify-between items-center h-12">
        <div className="flex justify-between items-center h-12 gap-2">
            {/* logo on the left and hamburger for mobile device*/}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 focus:outline-none ml-2"
        >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        <div className="text-lg md:text-xl font-bold text-gray-800 shrink-0">
        CS — Ticket System
        </div>
        </div>

        {/*right side menu and button*/}
        <div className="flex items-center gap-2 md:gap-8">
        
        {/* desktop menu*/}
        <ul className="hidden lg:flex gap-6 text-sm font-medium text-gray-900">
            <li className="hover:text-[#422AD5] cursor-pointer transition">Home</li>
            <li className="hover:text-[#422AD5] cursor-pointer transition">FAQ</li>
            <li className="hover:text-[#422AD5] cursor-pointer transition">Changelog</li>
            <li className="hover:text-[#422AD5] cursor-pointer transition">Blog</li>
            <li className="hover:text-[#422AD5] cursor-pointer transition">Download</li>
            <li className="hover:text-[#422AD5] cursor-pointer transition">Contact</li>
        </ul>

          {/* New Ticket Button with Gradient (#422AD5) */}
        <button onClick={onNewTicket} className="bg-linear-to-r from-[#422AD5] to-[#6D28D9] hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all shadow-md shrink-0">
            + New Ticket
        </button>
        </div>
    </div>
    {/* mobile drop down menu*/}
    <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-4 pb-4 text-sm font-medium text-gray-600 border-t pt-4">
            <li className="hover:text-[#422AD5]">Home</li>
            <li className="hover:text-[#422AD5]">FAQ</li>
            <li className="hover:text-[#422AD5]">Changelog</li>
            <li className="hover:text-[#422AD5]">Blog</li>
            <li className="hover:text-[#422AD5]">Download</li>
            <li className="hover:text-[#422AD5]">Contact</li>
        </ul>
    </div>
    </nav>
    );
};

export default Navbar;