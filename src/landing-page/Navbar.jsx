import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo"
          className="h-6"
        />
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
        <li>
          <a href="#" className="hover:text-blue-600">
            Signup
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar