'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Collin Aerospace', src: '/logos/COLLIN.png' },
  { name: 'Foxcon', src: '/logos/FOXCON.png' },
  { name: 'Hitachi', src: '/logos/HITACHI.png' },
  { name: 'JK-TYRES', src: '/logos/JKTYRES.png' },
  { name: 'RANE MADRAS', src: '/logos/RANE.png' },
  { name: 'Semitech', src: '/logos/SEMITECH.png' },
  { name: 'Triton Valves', src: '/logos/TRITON.png' },
  { name: 'TRMN', src: '/logos/TRMN.png' },
  { name: 'WALVOIL', src: '/logos/WALVOIL.png' },
  { name: 'Yonex', src: '/logos/YONEX.png' },
];

export default function Clients() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4"
      >
        Trusted By Industry Leaders
      </motion.h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        We proudly support these top-tier companies in achieving their HR transformation goals.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
        {clientLogos.map(({ name, src }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center h-28"
          >
            <Image
              src={src}
              alt={name + ' logo'}
              width={120}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

