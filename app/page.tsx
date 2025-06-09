'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section with High-Clarity Background */}
      <section
        className="relative text-center py-32 px-4 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: 'url(/vecteezy_hrm-or-human-resource-management-focus-to-manager-icon_25025436.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-0" />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 text-shadow-md tracking-wide"
        >
          Transforming Talent. Empowering Success.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-shadow-md font-medium"
        >
          Partnering with you to deliver expert HR solutions — from recruitment and payroll to leadership development and strategic workforce planning.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-md"
        >
          Contact Us
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expertise</h3>
        <div className="grid gap-y-6 md:grid-cols-3 md:gap-10">
          {[
            ['Recruitment', 'Expert hiring solutions'],
            ['Payroll', 'Accurate & secure payments'],
            ['Training', 'Upskill your workforce'],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-6 bg-gray-50 border rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Trusted by Top Brands</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="w-28 h-16 bg-white shadow rounded flex items-center justify-center text-gray-400 text-sm"
            >
              Logo {n}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-4 bg-gradient-to-br from-blue-100 to-blue-50">
        <h4 className="text-2xl font-semibold text-blue-900 mb-4">Let’s Build Your Dream HR Strategy</h4>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
