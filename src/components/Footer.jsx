import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 mt-auto"> {/* Changed mt-16 to mt-auto */}
      <div className="pointer-events-none absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6"> {/* Reduced py-10 to py-6 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Qulee AI. All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">About</a>
            <a href="#" className="text-slate-300 hover:text-white">Blog</a>
            <a href="#" className="text-slate-300 hover:text-white">Contact</a>
            <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;