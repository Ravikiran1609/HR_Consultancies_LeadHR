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
      {/* Hero Section with Video */}
      <section className="relative text-center py-32 px-4 bg-black overflow-hidden z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        >
          <source src="/hr_background_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-5xl md:text-6xl font-extrabold text-white mb-6 text-shadow-md tracking-wide"
        >
          Transforming Talent. Empowering Success.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-xl md:text-2xl text-white max-w-3xl mx-auto text-shadow-md font-medium"
        >
          Partnering with you to deliver expert HR solutions — from recruitment and payroll to leadership development and strategic workforce planning.
        </motion.p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="relative z-20 inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-md"
        >
          Contact Us
        </motion.a>
      </section>

      {/* Services Section with Animated Cards */}
      <section className="py-20 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expertise</h3>
        <div className="grid gap-y-6 md:grid-cols-3 md:gap-10">
          {[
            ['Recruitment', 'Expert hiring solutions'],
            ['Payroll', 'Accurate & secure payments'],
            ['Training', 'Upskill your workforce'],
          ].map(([title, desc], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 bg-gray-50 border rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 px-4 text-center">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h3>
        <motion.div
          className="mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="italic text-gray-700">
            "Lead HR transformed our hiring process. Their expertise helped us onboard top talent quickly and efficiently."
          </blockquote>
          <p className="mt-4 font-semibold text-blue-600">— HR Director, FinTech Corp</p>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Trusted by Top Brands</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3, 4, 5].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.1 }}
              className="w-28 h-16 bg-gray-100 shadow rounded flex items-center justify-center text-gray-400 text-sm"
            >
              Logo {n}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <h4 className="text-3xl font-semibold mb-4">Let’s Build Your Dream HR Strategy</h4>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
