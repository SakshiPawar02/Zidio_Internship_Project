import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, Rocket, BookOpen, User, Info } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Zidio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/courses" icon={<BookOpen className="h-5 w-5" />} text="Courses" />
            <NavLink to="/playground" icon={<Rocket className="h-5 w-5" />} text="Playground" />
            <NavLink to="/about" icon={<Info className="h-5 w-5" />} text="About" />
            <NavLink to="/profile" icon={<User className="h-5 w-5" />} text="Profile" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/courses" icon={<BookOpen className="h-5 w-5" />} text="Courses" />
              <MobileNavLink to="/playground" icon={<Rocket className="h-5 w-5" />} text="Playground" />
              <MobileNavLink to="/about" icon={<Info className="h-5 w-5" />} text="About" />
              <MobileNavLink to="/profile" icon={<User className="h-5 w-5" />} text="Profile" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;