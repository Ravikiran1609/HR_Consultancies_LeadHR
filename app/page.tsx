'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
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

      {/* CTA Section Updated */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-blue-600 to-blue-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/5 to-transparent animate-pulse"></div>
        <div className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl animate-spin-slow"></div>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg"
        >
          Let’s Build Your Dream HR Strategy
        </motion.h4>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white text-blue-700 text-lg font-bold rounded-xl shadow-lg hover:bg-gray-100"
        >
          Get Started
        </motion.a>
      </section>
    </div>
  );
}
