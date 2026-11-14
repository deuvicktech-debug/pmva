import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-white mb-3">
            <ShieldCheck className="w-6 h-6 text-teal-400" />
            <span className="font-bold text-lg">PMVA Training UK</span>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Prevention and Management of Violence and Aggression (PMVA) structured
            training framework for healthcare, mental health, social care,
            education, and security professionals. Aligned with BILD ACT, RRN
            Training Standards, NHS, and CQC expectations.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-teal-400">PMVA Courses &amp; Holds</Link></li>
            <li><Link to="/about" className="hover:text-teal-400">About &amp; Standards</Link></li>
            <li><Link to="/book" className="hover:text-teal-400">Book Training</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Compliance &amp; Frameworks
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>BILD ACT / RRN Training Standards</li>
            <li>NHS &amp; CQC Expectations</li>
            <li>Mental Health Act &amp; Mental Capacity Act</li>
            <li>Positive &amp; Proactive Care</li>
            <li>Trauma-Informed Practice</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} PMVA Training UK. All rights reserved. Safety, dignity, and human rights for all involved.
      </div>
    </footer>
  );
};