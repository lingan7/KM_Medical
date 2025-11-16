import { FaShieldAlt, FaLightbulb, FaRocket, FaCogs, FaUserTie, FaChartBar, FaFileAlt, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Opportunity() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">The Opportunity</h1>
        
        {/* The Challenge Section */}
        <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
          {/* <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Medical Device Product Development with FDA Clearance
          </h2>
           */}
          <div className="space-y-6">
            {/* <div className="flex items-start">
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
            </div> */}
            
            {/* <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-800 font-medium">
                Entails risk and takes considerable time, expenses, and resources.
              </p>
            </div> */}
            
            {/* Challenge Section */}
            <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Challenge</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left Column - Challenge Items */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaShieldAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        <span className="font-medium">FDA approved Medical Device</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaFileAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        <span className="font-medium">Must meet CFR/ISO requirements</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaChartBar className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        <span className="font-medium">Must show objective evidence of outputs</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaCogs className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        <span className="font-medium">Must follow the development process per the QMS</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-800 font-medium">
                      Journey entails risk, time, expenses, and resources.
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Image */}
                <div className="flex justify-center h-full min-h-[350px]">
                  <img 
                    src="/images/Challenge.png" 
                    alt="Medical Device Development Challenge" 
                    className="max-w-full h-full object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {/* Solution Section */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaRocket className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        Engage an experienced, knowledgeable, and trusted advisor
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaShieldAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        Strategically manage costs, time-to-market, quality, and risk profile
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Result</h3>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaCheckCircle className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        Successful execution and launch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">
                        Meet customer and business expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Images Section */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full border border-gray-200">
                <div className="grid grid-cols-1 gap-6 h-full">
                  <div className="flex justify-center items-center">
                    <img 
                      src="/images/Solution1.png" 
                      alt="Solution 1" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/images/Solution2.png" 
                      alt="Solution 2" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/images/Solution3.png" 
                      alt="Solution 3" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Engage Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Engage Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
