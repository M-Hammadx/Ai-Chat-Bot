import React, { useState } from 'react';

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Navigation links array for easy rendering and maintenance
    const navLinks = [
        {
            name: 'Dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
            path: '#dashboard',
            active: true // Just simulating active state for preview
        },
        {
            name: 'Chat Tester',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            path: '#chat'
        },
        {
            name: 'Test Results',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            path: '#results'
        },
        {
            name: 'Settings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            path: '#settings'
        }
    ];

    return (
        <aside
            className={`
                fixed top-0 left-0 z-40 h-screen bg-slate-900 border-r border-slate-800 text-slate-300
                transition-all duration-300 ease-in-out flex flex-col
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}
        >
            {/* Header / Logo section */}
            <div className={`
                h-16 flex items-center border-b border-slate-800 px-4
                ${isCollapsed ? 'justify-center' : 'justify-between'}
            `}>
                {!isCollapsed && (
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <span className="font-semibold text-lg text-white">AI Tester</span>
                    </div>
                )}

                {isCollapsed && (
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                        A
                    </div>
                )}

                {/* Collapse Toggle Button - visible only when expanded or hovered on desktop */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`
                        p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500
                        ${isCollapsed ? 'hidden' : 'block'}
                    `}
                    aria-label="Toggle Sidebar"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Expander Button when collapsed */}
            {isCollapsed && (
                <div className="py-4 flex justify-center">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Navigation Menu */}
            <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto overflow-x-hidden">
                {!isCollapsed && (
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Menu
                    </p>
                )}

                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.path}
                        className={`
                            flex items-center rounded-xl transition-all duration-200 group
                            ${isCollapsed ? 'justify-center p-3' : 'px-3 py-2.5 gap-3'}
                            ${link.active
                                ? 'bg-indigo-600 border border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                                : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                            }
                        `}
                    >
                        <div className={`
                            ${link.active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}
                            transition-colors
                        `}>
                            {link.icon}
                        </div>

                        {!isCollapsed && (
                            <span className="font-medium">{link.name}</span>
                        )}

                        {/* Tooltip for collapsed state */}
                        {isCollapsed && (
                            <div className="absolute left-16 bg-slate-800 text-white text-xs px-2.5 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                                {link.name}
                            </div>
                        )}
                    </a>
                ))}
            </div>

            {/* User Profile Section at bottom */}
            <div className="p-3 mt-auto border-t border-slate-800">
                <div className={`
                    flex items-center rounded-xl p-2 transition-colors cursor-pointer hover:bg-slate-800
                    ${isCollapsed ? 'justify-center' : 'gap-3'}
                `}>
                    <img
                        src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff&rounded=true"
                        alt="User Avatar"
                        className="w-9 h-9 rounded-full ring-2 ring-slate-800"
                    />

                    {!isCollapsed && (
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <span className="text-sm font-medium text-white truncate">Admin User</span>
                            <span className="text-xs text-slate-500 truncate">admin@tester.ai</span>
                        </div>
                    )}

                    {!isCollapsed && (
                        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
