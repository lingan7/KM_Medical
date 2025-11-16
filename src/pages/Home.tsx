import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative shadow-lg overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}images/homeBG.png`} 
            alt="Medical Device Consulting Background" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Transforming Medical Innovations into Market Success
              </h1>
              <p className="text-lg md:text-2xl mb-12 leading-relaxed text-white/90">
                At KM Medical Device Consulting, we guide you from concept to FDA approval, ensuring compliance, speed, and efficiency in every step of your journey.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
                >
                  Get Started
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-20 mt-16">
        <h2 className="text-3xl font-bold text-center mb-12 ml-5">Our Service Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-1">
          {[
            {
              title: 'Strategy',
              description: 'Where to play & how to win',
              iconSrc: `${import.meta.env.BASE_URL}images/strategy.png`
            },
            {
              title: 'Product Development',
              description: 'Development & Execution',
              iconSrc: `${import.meta.env.BASE_URL}images/productdevelopment.png`
            },
            {
              title: 'R&D Operations',
              description: 'Processes, Tools, Infrastructure',
              iconSrc: `${import.meta.env.BASE_URL}images/randdoperations.png`
            },
            {
              title: 'Talent',
              description: 'Competencies, Partnerships',
              iconSrc: `${import.meta.env.BASE_URL}images/talent.png`
            }
          ].map((service, index) => (
            <div key={index} className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow ${index === 0 ? 'ml-5' : ''} ${index === 3 ? 'mr-5' : ''}`}>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <div className="mb-3 flex justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${service.title.toLowerCase().replace(/\s+/g, '')}.png`}
                  alt={`${service.title} icon`}
                  className="h-12 w-12 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <p className="text-gray-600 text-center">{service.description}</p>
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
            to help bring innovative Medical technologies to market in an efficient and compliant way.
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

