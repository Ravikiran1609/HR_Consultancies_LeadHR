export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Welcome to Lead HR</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Your trusted partner in HR transformation — recruitment, payroll, training, leadership and more.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 md:mt-10 px-6 py-3 w-full sm:w-auto text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
        >
          Contact Us
        </a>
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
