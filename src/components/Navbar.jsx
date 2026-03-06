import React from "react";

const Navbar = () => {
    return (
        <header className="w-full">
            <div className="flex gap-4 justify-between">
                <h2>Contact Us</h2>
                <p>Get in touch with us for any inquiries or support.</p>
            </div>
            <nav className="bg-gray-100 text-gray-900 py-3 flex items-center justify-between">

                <div className="flex items-center gap-4 font-semibold">
                    <img src="./favicon.svg" alt="Logo" />
                    <span>AI Chatbot Tester</span>
                </div>

                <div className="flex justify-between items-center gap-20">
                    <ul className="flex gap-10 font-semibold">
                        <li><a href="">Home</a></li>
                        <li><a href="">Chat</a></li>
                        <li><a href="">Test Results</a></li>
                        <li><a href="">Dashboard</a></li>
                    </ul>

                    <div className="flex gap-5 font-semibold">
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Navbar;