import { FaShieldAlt, FaLightbulb, FaRocket, FaCogs, FaUserTie, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Opportunity() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">The Opportunity</h1>
        
        {/* The Challenge Section */}
        <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Medical Device Product Development with FDA Clearance
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                <FaShieldAlt className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  <span className="font-medium">Must meet CFR/ISO requirements</span> - Ensuring compliance with all regulatory standards and guidelines.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                <FaChartBar className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  <span className="font-medium">Must show objective evidence of outputs</span> - Documented proof of all development stages and validations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                <FaCogs className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  <span className="font-medium">Must follow the product development process</span> stated in the QMS for consistent quality and compliance.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-800 font-medium">
                Entails risk and takes considerable time, expenses, and resources.
              </p>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-stretch">
              {/* Strategic Solution Text */}
              <div className="p-10 md:p-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl text-white h-full transform transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="flex items-center mb-5">
                  <div className="bg-white/20 p-2 rounded-full mr-4 flex-shrink-0">
                    <FaRocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Our Strategic Solution</h3>
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-white/90 text-xl leading-relaxed border-l-4 border-white/30 pl-4 py-2 mb-6">
                    <span className="font-semibold text-white">Early engagement</span> with an experienced, knowledgeable, and trusted advisor for <span className="font-medium text-white/90">strategic management</span> of the "<span className="font-medium text-white/90">Pain Curve</span>" to optimize:
                  </p>
                  {/* List removed per request */}
                </div>
                <div className="mt-auto pt-4 border-t border-white/20">
                  <p className="text-white/90 text-sm italic font-light">
                    "The right guidance at the right time can transform challenges into opportunities."
                  </p>
                </div>
              </div>

              {/* Key Outcomes with Icons */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg h-full border border-gray-200">
                <div className="grid grid-cols-2 gap-8 md:gap-10 place-items-center">
                  <div className="text-center">
                    <img src={`${import.meta.env.BASE_URL}icons/cost.png`} alt="Cost efficiency" className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <p className="mt-3 text-sm md:text-base font-medium text-gray-800">Cost efficiency</p>
                  </div>
                  <div className="text-center">
                    <img src={`${import.meta.env.BASE_URL}icons/speed.png`} alt="Time-to-market acceleration" className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <p className="mt-3 text-sm md:text-base font-medium text-gray-800">Time-to-market acceleration</p>
                  </div>
                  <div className="text-center">
                    <img src={`${import.meta.env.BASE_URL}icons/Quality.png`} alt="Risk mitigation" className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <p className="mt-3 text-sm md:text-base font-medium text-gray-800">Risk mitigation</p>
                  </div>
                  <div className="text-center">
                    <img src={`${import.meta.env.BASE_URL}icons/efficiency.png`} alt="Overall program success" className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <p className="mt-3 text-sm md:text-base font-medium text-gray-800">Overall program success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Engage Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Engage Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Deep Expertise */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Deep Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>30+ years in R&D</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>20 years in MedTech</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Stryker Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cross Functional Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Business Acumen</span>
                </li>
              </ul>
            </div>
            
            {/* Track Record */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaRocket className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Track Record</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Commercial launches of Class I & II devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Efficient Execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Product Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Process Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Partnerships with KOLs and customers</span>
                </li>
              </ul>
            </div>
            
            {/* Founder Led */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUserTie className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Founder Led</h3>
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
        
        {/* CTA Section */}
        <section className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to accelerate your medical device development?</h3>
          <Link 
            to="/contact" 
            className="inline-block bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
