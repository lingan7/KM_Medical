import { FaHandshake, FaCheck, FaAward, FaFileAlt, FaChartBar, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Opportunity() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header section with styled box */}
      <div className="bg-primary p-8 md:p-10 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Strategic management of quality, cost, risk, and timelines          
          </h2>
          <p className="text-xl text-white/90">
            To make the innovation journey successful
          </p>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-2">The Opportunity</h1>
        
        <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {/* Challenge Section Left Column */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">FDA approved Medical Device</h3>
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaFileAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-lg">
                        <span className="font-medium">Must meet CFR/ISO requirements</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaChartBar className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-lg">
                        <span className="font-medium">Must show objective evidence of outputs</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaCogs className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-lg">
                        <span className="font-medium">Must follow the development process per the QMS</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-800 font-medium text-lg">
                      Journey entails risk, time, expenses, and resources.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Block Diagram Section */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center text-primary">Development Journey</h3>
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="space-y-2">
                      {/* Stage 1 */}
                      <div className="flex items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="ml-4 flex-1">
                          <div className="bg-[#d7e7f8] text-gray-800 rounded-xl p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#b7d7f8]">
                            <h4 className="font-semibold text-center text-xs">Concept & Prototype</h4>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow 1 */}
                      <div className="flex justify-center my-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#a6a6a6] transition-all duration-300 transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      
                      {/* Stage 2 */}
                      <div className="flex items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="ml-4 flex-1">
                          <div className="bg-[#5a80a9] text-white rounded-xl p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#4a7099] h-full flex items-center justify-center">
                            <h4 className="font-semibold text-center text-xs">Design Development</h4>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow 2 */}
                      <div className="flex justify-center my-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#a6a6a6] transition-all duration-300 transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      
                      {/* Stage 3 */}
                      <div className="flex items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="ml-4 flex-1">
                          <div className="bg-[#f1bb34] text-gray-800 rounded-xl p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#e1ab24] h-full flex items-center justify-center">
                            <h4 className="font-semibold text-center text-xs">Verification & Validation</h4>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center my-1">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#a6a6a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      
                      {/* Stage 4 */}
                      <div className="flex items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                        <div className="ml-4 flex-1">
                          <div className="bg-[#a6a6a6] text-white rounded-xl p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#969696] h-full flex items-center justify-center">
                            <h4 className="font-semibold text-center text-xs">Regulatory Submission</h4>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center my-1">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#a6a6a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      
                      {/* Stage 5 */}
                      <div className="flex items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
                        <div className="ml-4 flex-1">
                          <div className="bg-[#acdb35] text-gray-800 rounded-xl p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#9ccb25] h-full flex items-center justify-center">
                            <h4 className="font-semibold text-center text-xs">Market Launch</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Solution Section Left Column */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Solution</h3>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <FaHandshake className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 text-lg">
                    Engage an experienced, knowledgeable, and trusted advisor
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <FaChartBar className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 text-lg">
                    Strategically manage costs, time-to-market, quality, and risk profile
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Result</h3>
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaCheck className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-lg">
                        Successful execution and launch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                      <FaAward className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 text-lg">
                        Meet customer and business expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - FDA Approved Image */}
            <div className="flex justify-center items-center h-full p-6 md:p-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/FDA_Approved.png`} 
                    alt="FDA Approved" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Engage Us Section */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Engage Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"> */}
            {/* Deep Expertise */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
            </div> */}
            
            {/* Track Record */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
            </div> */}
            
            {/* Founder Led */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
        </section> */}
        
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
  );
}
