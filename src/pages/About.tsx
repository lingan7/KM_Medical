export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We help med tech startups and emerging companies turn ideas or concepts into FDA approved medical devices that improve the lives of patients and caregivers.
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
              <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}images/kapil-mehra.png`} 
                  alt="Kapil Mehra" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/400x400?text=Kapil+Mehra';
                  }}
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kapil Mehra, MS ME | MBA</h2>
              <p className="text-lg font-medium text-primary mb-4">Founder & Principal Consultant, KM Medical Device Consulting, LLC</p>
              <p className="text-gray-700 leading-relaxed">
                20 years in a F100 MedTech company leading R&D and product development for Class I & II devices—from concept to FDA clearance and commercialization. Kapil partners with startups and emerging med-tech firms to accelerate design, meet regulatory expectations, and bring commercially viable devices to market.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Expertise</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">R&D Strategy</h3>
              <p className="text-gray-700">
                Strategic product and portfolio planning including pipeline, financial analytics, where to play, and how to win
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">Product Development</h3>
              <p className="text-gray-700">
                Front end innovation and comprehensive execution from specifications to V&V and launch
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">R&D Operations</h3>
              <p className="text-gray-700">
                Deploy lean and efficient processes, tools, and infrastructure for rapid product development
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">Technical Talent Leadership</h3>
              <p className="text-gray-700">
                Mentor and train technical talent to learn the tricks of the trade, development, and career advancement
              </p>
            </div>
          </div>
        </section>
        {/* Why Engage Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Engage Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Efficiency */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Efficient Execution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimized Processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cost effective development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Speed to market</span>
                </li>
              </ul>
            </div>
            
            {/* Quality */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Quality Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fully verified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>FDA ready</span>
                </li>
              </ul>
            </div>
            
            {/* Leadership */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Founder led</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct Collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible Arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Partner Network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Integrity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
