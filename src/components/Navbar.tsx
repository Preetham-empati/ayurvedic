import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Leaf, LogOut } from 'lucide-react';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out');
    }
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Ayush Herbal
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/plants" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Plants
            </Link>
            <Link to="/explore" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Explore
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Community
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}