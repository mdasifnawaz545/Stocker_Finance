import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full bg-blue-50 p-2 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img 
                        src="../assets/zerodha-kite-seeklogo.svg" 
                        alt="Zerodha kite" 
                        className="h-4 w-auto"
                    />
                    {/* <span className="text-xl font-bold text-blue-700">ZerodhaKite</span> */}
                </div>

                {/* Right: Login and Logout Buttons */}
                <div className="flex gap-4">
                    {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Login
                    </button> */}
                    <button className="px-4 scale-75 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
