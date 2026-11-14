import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShieldCheck, Menu, X, Calendar, Lock } from 'lucide-react';
import { useTraining } from '../context/useTraining';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { upcomingTraining } = useTraining();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Courses', path: '/services' },
    { name: 'About PMVA', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Announcement Bar showing Next Upcoming Training */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              <strong>Next Training:</strong> {upcomingTraining.courseTitle} —{' '}
              <span className="text-teal-300 font-semibold">
                {upcomingTraining.startDate}
              </span>{' '}
              ({upcomingTraining.spotsAvailable} spots left)
            </span>
          </div>
          <Link
            to="/book"
            className="text-teal-300 hover:text-teal-200 underline font-medium shrink-0"
          >
            Reserve Your Place &rarr;
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="bg-teal-700 p-2 rounded-lg text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-lg text-slate-900 tracking-tight block leading-none">
              PMVA Training UK
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              BILD ACT &amp; RRN Aligned
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-teal-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/book"
            className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Book Training
          </Link>

          <Link
            to="/admin"
            title="Admin Portal"
            className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-xs border border-slate-300 px-2.5 py-1.5 rounded-md"
          >
            <Lock className="w-3.5 h-3.5" />
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-slate-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-teal-700"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-teal-700 text-white py-2.5 rounded-lg font-semibold"
          >
            Book Training
          </Link>
          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center border border-slate-300 text-slate-700 py-2 rounded-lg text-sm"
          >
            Admin Dashboard
          </Link>
        </div>
      )}
    </header>
  );
};