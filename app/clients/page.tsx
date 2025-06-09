'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const clientLogos = [
  '/clients/COLLIN.png',
  '/clients/FOXCON.png',
  '/clients/HITACHI.png',
  '/clients/JKTYRES.png',
  '/clients/RANE.png',
  '/clients/SEMITECH.png',
  '/clients/WALVOIL.png',
  '/clients/YONEX.png',
  '/clients/TRITON.png',
  '/clients/TRMN.png',
];

export default function Clients() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white py-20 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10">
        Our Esteemed Clients
      </h1>

      {/* Scrolling logo row */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          animate={controls}
          className="flex space-x-12 w-max"
        >
          {[...clientLogos, ...clientLogos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
            />
          ))}
        </motion.div>
      </div>

      {/* Static Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 px-4">
        {clientLogos.map((logo, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-16 w-auto mx-auto object-contain grayscale hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

