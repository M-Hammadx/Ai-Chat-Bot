import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    // We lift the collapsed state here so the main content margin can adjust dynamically!
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <SideBar isCollapsed={isCollapsed} toggleCollapse={() => setIsCollapsed(!isCollapsed)} />

            {/* The main content area dynamically adjusts its left margin based on sidebar state */}
            <div className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
                <Navbar />

                {/* Main page content goes here */}
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
