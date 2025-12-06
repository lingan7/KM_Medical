import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { SingleValue } from 'react-select';
import { emailjsConfig } from '../config/emailjs';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select an option',
  className = ''
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    if (newValue) {
      onChange(newValue.value);
    }
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`w-full ${className}`}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        className="react-select-container"
        classNamePrefix="react-select"
        isSearchable={false}
        unstyled
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '44px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#9ca3af',
            },
          }),
          menu: (base) => ({
            ...base,
            marginTop: '4px',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? '#1b4a5f'
              : isFocused
              ? 'rgba(27, 74, 95, 0.1)'
              : 'white',
            color: isSelected ? 'white' : 'var(--text-primary, #1f2937)',
            '&:active': {
              backgroundColor: isSelected ? 'var(--primary-600, #1b4a5f)' : 'var(--gray-100, #f3f4f6)',
            },
          }),
        }}
        classNames={{
          control: () =>
            'w-full flex items-center justify-between px-4 py-2.5 text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4a5f]/50 focus:border-[#1b4a5f] transition-all duration-200 hover:border-[#1b4a5f]',
          menu: () => 'bg-white rounded-lg border border-gray-200 mt-1',
          option: (state) => 
            `px-4 py-2 cursor-pointer transition-colors ${
              state.isSelected 
                ? 'bg-[#1b4a5f] text-white hover:bg-[#1a3f4f]' 
                : 'hover:bg-gray-100'}`,
          menuList: () => 'p-1',
          singleValue: () => 'text-gray-900',
          placeholder: () => 'text-gray-400',
          dropdownIndicator: () => 'text-gray-400',
          indicatorSeparator: () => 'bg-gray-300 mx-2 h-5 w-px',
        }}
      />

      {isOpen && (
        <ul 
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none"
          role="listbox"
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2.5 transition-colors duration-200 ${
                value === option.value 
                  ? 'bg-[#1b4a5f] text-white font-medium' 
                  : 'text-gray-700 hover:bg-[#1b4a5f]/10'
              } cursor-pointer`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const { serviceId, templateId, publicKey } = emailjsConfig;

      // Validate that all required EmailJS config values are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your config file.');
      }

      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        company: formData.company.trim() || 'Not provided',
        user_email: formData.email.trim(), // Add this to use in the template
        user_name: formData.name.trim()    // Add this to use in the template
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast.success('Your message has been sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for expert medical device consulting services
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-gray-50 p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-gray-900 mb-1 text-sm">Email</h3>
                  <a 
                    href="mailto:info@kmmedicaldeviceconsulting.com" 
                    className="text-primary hover:text-primary-light transition-colors text-xs sm:text-base"
                    style={{ wordBreak: 'break-all' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'mailto:info@kmmedicaldeviceconsulting.com';
                    }}
                  >
                    info@kmmedicaldeviceconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1 text-xs">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/kapil-mehra-usa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors text-sm"
                  >
                    linkedin.com/in/kapil-mehra-usa
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Connect With Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Expert medical device consulting services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Proven track record in the industry</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized solutions for your needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1b4a5f] focus:border-[#1b4a5f] focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1b4a5f] focus:border-[#1b4a5f] focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1b4a5f] focus:border-[#1b4a5f] focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <Select
                  value={formData.subject ? { value: formData.subject, label: formData.subject } : null}
                  onChange={(selectedOption) => {
                    setFormData({ 
                      ...formData, 
                      subject: selectedOption?.value || '' 
                    });
                  }}
                  options={[
                    { value: 'General Inquiry', label: 'General Inquiry' },
                    { value: 'Strategy', label: 'Strategy' },
                    { value: 'Product Development', label: 'Product Development' },
                    { value: 'R&D Operations', label: 'R&D Operations' },
                    { value: 'Talent', label: 'Talent' }
                  ]}
                  placeholder="Select a subject"
                  className="w-full text-left"
                  classNamePrefix="select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: '44px',
                      borderColor: '#d1d5db',
                      '&:hover': {
                        borderColor: '#9ca3af',
                      },
                      '&:focus-within': {
                        borderColor: '#1b4a5f',
                        boxShadow: '0 0 0 2px rgba(27, 74, 95, 0.2)',
                      },
                    }),
                    option: (base, { isSelected, isFocused }) => ({
                      ...base,
                      backgroundColor: isSelected 
                        ? '#1b4a5f' 
                        : isFocused 
                        ? 'rgba(27, 74, 95, 0.1)' 
                        : 'white',
                      color: isSelected ? 'white' : '#1f2937',
                      '&:active': {
                        backgroundColor: isSelected ? '#1b4a5f' : 'rgba(27, 74, 95, 0.1)',
                      },
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: '#1f2937',
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#1b4a5f',
                      primary25: 'rgba(27, 74, 95, 0.1)',
                      primary50: 'rgba(27, 74, 95, 0.2)',
                      neutral20: '#d1d5db',
                      neutral30: '#9ca3af',
                    },
                  })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1b4a5f] focus:border-[#1b4a5f] focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}