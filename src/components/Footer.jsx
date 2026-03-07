import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-360 mx-auto px-6 md:px-16">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-12 gap-10 mb-12">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 pr-4">
                        <h2 className="text-xl font-bold tracking-tight text-white text-center lg:text-left">
                            CS — Ticket System
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed text-justify lg:text-left ">
                            CS — Ticket System is a streamlined customer support platform designed to manage and resolve issues efficiently.
                        </p>
                    </div>
                    {/* 2, 3, 4: Company, Services, Information */}
                    {[
            { title: "Company", links: ["About Us", "Our Mission", "Contact Sales"] },
            { title: "Services", links: ["Products & Services", "Customer Stories", "Download Apps"] },
            { title: "Information", links: ["Privacy Policy", "Terms & Conditions", "Join Us"] }
                        ].map((section, index) => (
                    <div key={index} className="text-center lg:text-left space-y-4">
                        <h3 className="text-lg font-semibold border-b border-gray-800 pb-2 lg:border-none inline-block lg:block">
                        {section.title}
                        </h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {section.links.map(link => (
                            <li key={link} className="hover:text-white cursor-pointer transition-colors">
                                {link}
                            </li>))}
                        </ul>
                    </div>
                    ))}
                     {/* 5. Social Links (Responsive Logic) */}
                    <div className="text-center lg:text-left space-y-6">
                        <h3 className="text-lg font-semibold border-b border-gray-800 pb-2 lg:border-none inline-block lg:block">
                            Social Links
                        </h3>

                    {/* Mobile View: Just Logos (Hidden on LG) */}
                    <div className="flex lg:hidden justify-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full font-bold">X</div>
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full font-bold">in</div>
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full font-bold">f</div>
                    </div>

                    {/* Desktop View: Logos with Text (Hidden on Mobile/Tablet) */}
                    <div className="hidden lg:flex flex-col gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-[10px]">X</span>
                            @CS — Ticket System
                        </div>
                        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-[10px]">in</span>
                            @CS — Ticket System
                        </div>
                        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-[10px]">f</span>
                            @CS — Ticket System
                        </div>
                    </div>

                        <div className="text-gray-400 text-xs flex justify-center lg:justify-start items-center gap-2">
                            <span>✉️</span> support@cst.com
                        </div>
                    </div>
                </div>
                        {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 mt-4 text-center">
                    <p className="text-xs text-gray-500 tracking-widest uppercase">
                        © 2026 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;