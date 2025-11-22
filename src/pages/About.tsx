import { FaRocket, FaAward, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header section with styled box */}
      <div className="bg-primary p-8 md:p-10 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-left">
          Experienced, collaborative, and trusted partners       
        </h2>
        <p className="text-xl text-white/90 text-left">
          Who are There for You
        </p>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      
      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We help MedTech startups and emerging companies turn ideas or concepts into FDA approved medical devices that improve the lives of patients and caregivers.​
        </p>
      </section>

      {/* About Me Section */}
      <section className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/kapil-mehra.png`} 
                  alt="Kapil Mehra" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/400x400?text=Kapil+Mehra';
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-800">Kapil Mehra, MS ME | MBA</h2>
            <p className="text-lg font-medium text-primary mb-4">Founder & Principal Consultant, KM Medical Device Consulting</p>
            <p className="text-gray-700 leading-relaxed text-left">
              20 years in a F100 MedTech company leading R&D and product development for Class I & II devices—from concept to FDA clearance and commercialization. Kapil partners with startups and emerging MedTech firms to accelerate design, meet regulatory expectations, and bring commercially viable devices to market.​
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Expertise</h2>
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
                Mentor and develop technical talent to master industry best practices and for career advancement​
              </p>
            </div>
          </div>
        </section>
      {/* Why Engage Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why engage with us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Efficiency */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaRocket className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Efficient Execution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Speed to market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cost-effective solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimized processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Strong partner network</span>
                </li>
              </ul>
            </div>
            
            {/* Quality */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaAward className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Quality and Trust</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fully tested and validated solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Robust risk management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>FDA-compliant outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-integrity decisions</span>
                </li>
              </ul>
            </div>
            
            {/* Leadership */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUserTie className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Founder-led</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborative approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct access to founder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible engagement models</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      {/* CTA Button Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to Explore Opportunities?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover how we can help bring your medical device ideas to life with our expert consulting services.
        </p>
        <Link 
          to="/opportunity"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1b4a5f] hover:bg-[#143848] transition-colors duration-200 md:py-4 md:text-lg md:px-10"
        >
          The Opportunity
        </Link>
      </section>
    </div>
  );
}
