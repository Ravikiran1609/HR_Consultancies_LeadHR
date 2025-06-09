'use client';
import '../styles/globals.css';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-700 whitespace-nowrap">Lead HR</h1>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <nav
              className={`${
                menuOpen ? 'block' : 'hidden'
              } absolute top-16 left-0 right-0 bg-white md:static md:flex md:space-x-6 md:items-center md:bg-transparent space-y-4 md:space-y-0 text-sm font-medium px-4 md:px-0 py-4 md:py-0`}
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

        <footer className="bg-white text-center py-6 mt-16 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Lead HR. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
