import React from 'react';
import { Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Briefcase size={24} />
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;