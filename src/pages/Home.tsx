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
            className="w-full h-[60vh] min-h-[400px] object-cover md:h-auto md:min-h-[500px]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 py-8 md:px-12 md:py-20">
            <div className="max-w-5xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 text-white">
                Transforming Medical Innovations into Market Success
              </h1>
              <p className="text-base md:text-2xl mb-6 md:mb-12 leading-relaxed text-white/90">
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
      <section className="mb-20 mt-16 px-4 sm:px-0">
        <h2 className="text-3xl font-bold text-center mb-12">Our Service Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 max-w-7xl mx-auto px-4 sm:px-6">
          {[
            {
              title: 'Strategy',
              description: 'Where to play & how to win',
              iconSrc: `${import.meta.env.BASE_URL}images/strategy.png`
            },
            {
              title: 'Product Development',
              description: 'Idea to Launch',
              iconSrc: `${import.meta.env.BASE_URL}images/productdevelopment.png`
            },
            {
              title: 'R&D Operations',
              description: 'Processes & tools',
              iconSrc: `${import.meta.env.BASE_URL}images/randdoperations.png`
            },
            {
              title: 'Talent',
              description: 'Competencies & partnerships',
              iconSrc: `${import.meta.env.BASE_URL}images/talent.png`
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
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
      <section className="bg-gray-50 p-12 rounded-2xl mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About KM Medical Device Consulting</h2>
          <p className="text-lg text-gray-700 mb-8">
            With years of experience in the medical device industry, we provide comprehensive consulting services 
            to help bring innovative Medical technologies to market in an efficient and compliant way.
          </p>
          <Link 
            to="/about" 
            className="text-primary hover:text-primary-light font-medium inline-flex items-center"
            >
            Learn more about us<svg className="w-4 h-4 ml-2 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center pt-4 pb-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="block">Ready to accelerate</span>
          <span className="text-xl md:text-3xl font-bold">your medical device development?</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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

