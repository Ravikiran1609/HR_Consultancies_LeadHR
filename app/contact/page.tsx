'use client';

export default function ContactPage() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-800 drop-shadow-md mb-4 animate-fade-in">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We’re here to answer your queries, explore partnerships, and create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Details */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 space-y-6 border-l-8 border-blue-500 animate-fade-in-left">
          <div>
            <h3 className="text-xl font-bold text-blue-700">Address</h3>
            <p className="text-gray-600 mt-1">
              No.151, 2nd Floor, 6th A Main Road, 7th A” Cross,<br />
              Near Hoysala Circle, Kengeri Satellite Town,<br />
              Bengaluru - 560060
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700">Email</h3>
            <a href="mailto:leadhrconsultingsolutions@gmail.com" className="text-blue-600 hover:underline">
              leadhrconsultingsolutions@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700">Phone</h3>
            <p className="text-gray-600">
              +91-9743403928<br />
              +91-7259646275
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 animate-fade-in-right">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

