export function Services() {
  // Header section with styled box
  const headerBox = (
    <div className="bg-primary p-8 md:p-10 rounded-2xl shadow-lg mb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true"></div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Fractional Leadership and Expert Guidance
      </h1>
      <p className="text-xl text-white/90">
        For medical device innovation and compliance
      </p>
    </div>
  );

  const services = [
    {
      title: 'Strategy',
      description: 'Strategic planning and market analysis for medical device innovation',
      iconSrc: '/icons/strategy.png',
      details: [
        'Product & Technology Roadmaps',
        'Portfolio Planning',
        'Competitive Landscape Analysis'
      ]
    },
    {
      title: 'Execution',
      description: 'End-to-end product development and implementation',
      iconSrc: '/icons/Execution.png',
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
      iconSrc: '/icons/operations.png',
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
      iconSrc: '/icons/Talent.png',
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
      title: 'MedTech Startups and Physician Innovators',
      description: 'Ideas to concept or fully developed FDA cleared products',
      icon: '🚀'
    },
    {
      title: 'Emerging MedTech Companies',
      description: 'Ideas to concept or fully developed FDA cleared products',
      icon: '📈'
    },
    {
      title: 'Venture Capital Firms and Investors',
      description: 'Seeking Independent Technical Diligence',
      icon: '💼'
    },
    {
      title: 'Large MedTech Corporations',
      description: 'R&D Leadership, Project Management or Technical Talent Development',
      icon: '🏢'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header Box */}
      {headerBox}

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">
                <img 
                  src={service.iconSrc} 
                  alt={`${service.title} icon`} 
                  className="h-10 w-10 object-contain" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <ul className="space-y-2 pl-12">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    <span>{detail}</span>
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
        <div className="grid md:grid-cols-2 gap-8">
          {whoWeServe.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 pl-12">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our team can tailor our services to meet your specific regulatory and quality needs.
        </p>
        <button className="bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded-lg transition duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
