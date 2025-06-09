import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Lead HR</h1>
            <nav className="space-x-6 text-sm font-medium">
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
