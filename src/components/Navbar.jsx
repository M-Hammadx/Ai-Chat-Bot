import React from "react";

const Navbar = () => {
    return (
        <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            {/* Top Announcement Bar */}
            <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm flex justify-center sm:justify-between items-center transition-all">
                <p className="hidden sm:block font-medium">Get in touch with us for any inquiries or support.</p>
                <div className="flex gap-4 items-center">
                    <a href="#contact" className="text-white hover:text-indigo-400 transition-colors font-medium flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 focus:ring-offset-slate-900 rounded-sm">
                        <span>Contact Us</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <img src="./favicon.svg" alt="Logo" className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        AI Chatbot <span className="text-indigo-600">Tester</span>
                    </span>
                </div>

                {/* Center Links (Desktop) */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base text-slate-600">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors px-2 py-1">Home</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors px-2 py-1">Chat</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors px-2 py-1">Test Results</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors px-2 py-1">Dashboard</a></li>
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:block text-slate-600 font-medium text-sm border-2 border-transparent hover:border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Sign In
                    </button>
                    <button className="bg-indigo-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95">
                        Sign Up
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;