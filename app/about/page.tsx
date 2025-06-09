'use client';

import Image from 'next/image';
import founderImage from '@/public/founder.jpg'; // ✅ Ensure this image exists

export default function About() {
  return (
    <section className="px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-700">About Lead HR</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Lead HR is a premier HR consulting and talent transformation company dedicated to empowering organizations across industries. With a legacy of excellence and a passion for people, we deliver strategic solutions that drive success.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To be the most trusted HR partner for businesses worldwide — enabling workplaces to thrive through innovation, integrity, and inclusion.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            We are committed to delivering excellence in talent acquisition, leadership development, payroll management, and employee engagement by aligning people with purpose.
          </p>
        </div>
      </div>

      {/* Founder Note */}
      <div className="mt-24 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <Image
          src={founderImage}
          alt="Founder of Lead HR"
          width={280}
          height={280}
          className="rounded-full shadow-xl object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2">A Note from Our Founder</h3>
          <p className="text-gray-700 text-lg">
            "When I founded Lead HR, my vision was to create an organization that puts people at the heart of progress. Today, I’m proud to say we’ve helped countless businesses build thriving teams with our expertise and care. Together, let’s continue building a future where every employee is empowered to excel."
          </p>
          <p className="mt-4 font-semibold text-gray-600">— Ravi Kiran, Founder & CEO</p>
        </div>
      </div>
    </section>
  );
}

