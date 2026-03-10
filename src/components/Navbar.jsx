import React from 'react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-30 w-full bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-200/20">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left Side: Context / Title */}
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 tracking-tight">
                        AI Test Center
                    </h1>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-700 border border-emerald-200/50">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            System Online
                        </span>
                    </div>
                </div>

                {/* Right Side: Actions & Profile */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Quick Actions */}
                    <div className="flex flex-row items-center gap-2">
                        <button
                            className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                            aria-label="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <button
                            className="relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                            aria-label="Notifications"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {/* Pulse Notification Badge */}
                            <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500 border-2 border-white"></span>
                            </span>
                        </button>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-slate-200 cursor-pointer group">
                        <div className="relative">
                            <img
                                src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff&bold=true"
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-indigo-100 shadow-sm transition-all duration-300"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                                Admin User
                            </p>
                            <p className="text-xs font-medium text-slate-400">
                                Workspace Admin
                            </p>
                        </div>
                        <button className="hidden sm:block text-slate-400 group-hover:text-indigo-600 transition-colors focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
