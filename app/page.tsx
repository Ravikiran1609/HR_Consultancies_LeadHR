'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { name: 'Ravi K.', role: 'CEO, FlexHire', quote: 'Lead HR transformed how we hire — truly world-class.' },
  { name: 'Anita D.', role: 'HR Manager, TalentHub', quote: 'Their training and payroll management are top-notch.' },
  { name: 'Kiran P.', role: 'Founder, DevLaunch', quote: 'Amazing partnership in recruitment and leadership dev.' }
];

const clientLogos = [
  '/logos/SEMITECH.png',
  '/logos/YONEX.png',
  '/logos/RANE.png',
  '/logos/TRITON.png',
  '/logos/TRMN.png',
  '/logos/FOXCON.png',
  '/logos/COLLIN.png',
  '/logos/WALVOIL.png',
  '/logos/HITACHI.png',
  '/logos/JKTYRES.png'
];

export default function Home() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const toggle = setInterval(() => setShowVideo((prev) => !prev), 5000);
    return () => clearInterval(toggle);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center py-32 px-4 h-[32rem] sm:h-[38rem] overflow-hidden z-10">
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/hr_background_video.mp4"
          />
        ) : (
          <img
            src="/vecteezy_hrm-or-human-resource-management-focus-to-manager-icon_25025436.jpg"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          >
            Transforming Talent. Empowering Success.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 font-medium drop-shadow"
          >
            Partnering with you to deliver expert HR solutions — from recruitment and payroll to leadership development and strategic workforce planning.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 shadow-lg"
          >
            Contact Us
          </motion.a>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-gray-100 px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h3>
        <div className="max-w-3xl mx-auto overflow-hidden relative">
          <div className="flex animate-slide space-x-10 w-max">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[300px] bg-white shadow p-6 rounded-xl">
                <p className="text-gray-600 mb-2 italic">“{t.quote}”</p>
                <div className="text-sm font-semibold text-blue-800">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Feature Cards */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expertise</h3>
        <div className="grid gap-y-6 md:grid-cols-3 md:gap-10">
          {[
            ['Recruitment', 'Expert hiring solutions'],
            ['Payroll', 'Accurate & secure payments'],
            ['Training', 'Upskill your workforce'],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-gray-50 border rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted Clients Logo Carousel */}
      <section className="py-16 px-4 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Trusted by Top Brands</h3>
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-slide gap-10 px-4">
            {clientLogos.map((logo, i) => (
              <div key={i} className="w-32 h-16 bg-white p-2 rounded shadow flex items-center justify-center">
                <Image src={logo} alt={`Client ${i}`} width={120} height={50} objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <h4 className="text-4xl font-bold mb-6 drop-shadow-lg">Let’s Build Your Dream HR Strategy</h4>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
