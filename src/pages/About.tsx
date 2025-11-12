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
                  src="/images/kapil-mehra.png" 
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
                Over 20 years in a F100 MedTech company leading R&D and product development for Class I & II devices—from concept to FDA clearance and commercialization. Kapil partners with emerging med-tech firms to accelerate design, meet regulatory expectations, and bring commercially viable devices to market.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Expertise</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">Regulatory Strategy</h3>
              <p className="text-gray-700">
                With deep expertise in FDA, CE Marking, and other global regulatory requirements, we help you develop 
                comprehensive regulatory strategies tailored to your medical device's classification and intended market.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">Quality Management</h3>
              <p className="text-gray-700">
                We assist in establishing and maintaining ISO 13485 compliant quality management systems, ensuring 
                your products meet the highest industry standards throughout their lifecycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-primary">Product Development</h3>
              <p className="text-gray-700">
                Our team provides guidance on design controls, risk management, and verification/validation strategies 
                to streamline your product development process.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h2>
          <ul className="space-y-4">
            {[
              "Industry veterans with decades of combined experience in medical device regulation",
              "Personalized approach tailored to your specific needs and goals",
              "Proven track record of successful regulatory submissions and approvals",
              "Comprehensive support from concept to commercialization",
              "Commitment to maintaining the highest ethical and professional standards"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
