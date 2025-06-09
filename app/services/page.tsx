'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Executive Staffing',
      description:
        'We specialize in sourcing top-tier executive talent tailored to your leadership requirements. Our curated process ensures candidates align with your strategic vision and culture.',
      image: '/images/services/executive_staffing.jpg',
    },
    {
      title: 'Contractual / Lease Manpower Supply',
      description:
        'Flexible workforce solutions tailored for project-based or seasonal needs. We manage the recruitment, onboarding, and HR lifecycle of contract professionals.',
      image: '/images/services/contractual_manpower.jpg',
    },
    {
      title: 'Statutory Compliance',
      description:
        'Comprehensive support to help your organization remain compliant with the latest labor laws and regulatory frameworks, minimizing legal risk and penalties.',
      image: '/images/services/statutory_compliance.jpg',
    },
    {
      title: 'Payroll Management',
      description:
        'Accurate and timely payroll services including salary disbursement, tax calculations, and payslip generation. 100% confidentiality and data integrity ensured.',
      image: '/images/services/payroll.jpg',
    },
    {
      title: 'Learning and Development',
      description:
        'Boost employee performance through customized training programs, workshops, and leadership development initiatives built to meet evolving business needs.',
      image: '/images/services/learning_development.jpg',
    },
    {
      title: 'Statutory Audits',
      description:
        'We assist in conducting internal and external audits for labor law compliance, ESI, PF, gratuity, etc., to ensure complete organizational adherence.',
      image: '/images/services/statutory_audit.jpg',
    },
    {
      title: 'Liasoning',
      description:
        'Seamless coordination with government departments for registrations, inspections, approvals, and renewals, easing compliance burdens on your HR teams.',
      image: '/images/services/liasoning.jpg',
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
