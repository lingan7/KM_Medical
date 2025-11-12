import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl shadow-lg px-6 py-14 md:px-12 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true"></div>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Transforming Medical Innovations into Market Success
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90">
                At KM Medical Device Consulting, we guide you from concept to FDA Clearance, 
                ensuring compliance, speed and efficiency in every step of your journey.
              </p>
              <div className="space-x-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
                >
                  Get Started
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Regulatory Strategy',
              description: 'Navigating FDA, CE, and other global regulatory requirements for medical devices.',
              icon: '📋'
            },
            {
              title: 'Quality Management',
              description: 'Implementing and maintaining ISO 13485 compliant quality management systems.',
              icon: '⚙️'
            },
            {
              title: 'Product Development',
              description: 'Supporting design controls and risk management throughout the product lifecycle.',
              icon: '💡'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 p-12 rounded-2xl mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About KM Medical Device Consulting</h2>
          <p className="text-lg text-gray-700 mb-8">
            With years of experience in the medical device industry, we provide comprehensive consulting services 
            to help bring innovative medical technologies to market efficiently and compliantly.
          </p>
          <Link 
            to="/about" 
            className="text-primary hover:text-primary-light font-medium inline-flex items-center"
          >
            Learn more about us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Ready to accelerate your medical device development?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can support your medical device journey.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-primary hover:bg-primary-light text-white hover:text-white font-medium py-3 px-8 rounded-lg transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

