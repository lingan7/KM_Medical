import { Link } from "react-router-dom";

export function Services() {
  const BASE = (import.meta as any).env.BASE_URL || '/';
  // Header section with styled box
  const headerBox = (
    <div className="bg-primary p-8 md:p-10 rounded-2xl shadow-lg mb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true"></div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Fractional Leadership and Expert Guidance
      </h1>
      <p className="text-xl text-white/90">
        For medical device innovation and product development
      </p>
    </div>
  );

  const services = [
    {
      title: 'Strategy',
      description: 'Strategic planning and market analysis for medical device innovation',
      iconSrc: `${BASE}icons/strategy.png`,
      details: [
        'Product & Technology Roadmaps',
        'Portfolio Planning',
        'Competitive Landscape Analysis'
      ]
    },
    {
      title: 'Execution',
      description: 'End-to-end product development and implementation',
      iconSrc: `${BASE}icons/Product_Development.png`,
      details: [
        'Front-end innovation concepts and prototypes',
        'Design, Development and Verification',
        'DFM and Supplier assessments',
        'DHF (Design History File) Management',
        'Launch Readiness'
      ]
    },
    {
      title: 'R&D Operations',
      description: 'Streamlining research and development processes',
      iconSrc: `${BASE}icons/R&D_operations.png`,
      details: [
        'NPD Process Development',
        'Design and Change Controls',
        'Project Management',
        'Engineering Tools Implementation',
        'Infrastructure Setup'
      ]
    },
    {
      title: 'Talent',
      description: 'Building and developing high-performing teams',
      iconSrc: `${BASE}icons/Talent.png`,
      details: [
        'R&D Structure Design',
        'Competency Development',
        'Team Engagement Strategies',
        'Professional Development Programs'
      ]
    }
  ];

  const whoWeServe = [
    {
      title: 'MedTech Startups',
      description: 'Ideas to concept or fully developed FDA cleared products',
      icon: '🚀'
    },
    {
      title: 'Physician Innovators',
      description: 'R&D Leadership, Project Management or Technical Talent Development',
      icon: '🏢'
    },
    {
      title: 'Emerging MedTech\'s',
      description: 'Ideas to concept or fully developed FDA cleared products',
      icon: '📈'
    },
    {
      title: 'Venture Capital Firms and Investors',
      description: 'Seeking Independent Technical Diligence',
      icon: '💼'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header Box */}
      {headerBox}

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:scale-105"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                <img 
                  src={service.iconSrc} 
                  alt={`${service.title} icon`} 
                  className="h-12 w-12 object-contain" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-primary mr-3 text-lg">•</span>
                    <span className="text-base leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Who We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whoWeServe.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-primary/10 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${item.title.toLowerCase().replace(/\s+/g, '')}.png`} 
                  alt={`${item.title} image`} 
                  className="w-40 h-40 object-contain mb-4 rounded-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <h3 className="text-2xl font-bold text-gray-800 text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We can tailor our services to meet your specific vision and mission​
        </p>
        <Link 
          to="/contact" 
          className="bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}
