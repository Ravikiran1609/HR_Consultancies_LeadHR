'use client';
import '../styles/globals.css';
import { useState } from 'react';
import ChatbotWidget from '../components/ChatbotWidget';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Lead HR logo"
                  className="h-10 w-10 rounded-full border-4 border-gradient-to-r from-blue-400 via-white to-blue-400 hover:animate-spin transition"
                />
                <span className="text-base sm:text-xl font-bold text-blue-700 block">Lead HR</span>
              </div>
              <span className="text-[10px] text-gray-500 pl-1 mt-1 block sm:hidden">
                Empowering HR Excellence
              </span>
              <span className="text-xs text-gray-500 pl-12 -mt-1 hidden sm:block">
                Empowering HR Excellence
              </span>
            </a>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            {/* Responsive Nav */}
            <nav
              className={`$${
                menuOpen ? 'flex' : 'hidden'
              } flex-col md:flex md:flex-row absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent text-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 shadow md:shadow-none z-10`}
            >
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/services" className="hover:text-blue-600">Services</a>
              <a href="/clients" className="hover:text-blue-600">Clients</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
              <a href="/chatbot" className="hover:text-blue-600">Chatbot</a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">{children}</main>

        {/* Floating Chatbot Widget */}
        <ChatbotWidget />

        <footer className="bg-white text-center py-6 mt-16 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Lead HR. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

