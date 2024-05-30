import React from 'react';
import logo from './logo.png';  // Ensure you have your logo image in this path

const Header = () => {
  return (
    <header className="bg-white p-4 text-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8  mr-2" />
          <span className="text-lg font-bold text-white">Company</span>
        </div>
        <nav className="flex space-x-8 ml-[740px] text-xl  p-2 rounded">
                  <a href="#find-suppliers" className="text-gray-800 hover:text-blue-500">Find Suppliers</a>
          <a href="#find-service-tags" className="text-gray-800 hover:text-blue-500">Find Service Tags ^</a>
        </nav>
        <div>
          <button className=" border-4 font-bold border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-100">Login/Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
