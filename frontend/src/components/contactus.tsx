import React, { useState } from 'react';

interface ContactUsProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  title = "Contact Us",
  subtitle = "Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!",
  buttonText = "Send",
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="w-full p-8 md:p-12 bg-stone-300">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Title and subtitle */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-5xl font-serif mb-4" style={{ color: '#3D1C02' }}>{title}</h2>
          <p className="text-lg" style={{ color: '#3D1C02', lineHeight: '1.6' }}>
            {subtitle}
          </p>
        </div>
        
        {/* Right side - Form */}
        <div className="md:w-2/3 md:pl-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg font-normal mb-2" style={{ color: '#3D1C02' }}>
                Name <span className="text-sm ml-1">(required)</span>
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <label className="block text-base mb-1" style={{ color: '#3D1C02' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-stone-500 rounded-full"
                    required
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="block text-base mb-1" style={{ color: '#3D1C02' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-stone-500 rounded-full"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-lg font-normal mb-2" style={{ color: '#3D1C02' }}>
                Email <span className="text-sm ml-1">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-stone-500 rounded-full"
                required
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-lg font-normal mb-2" style={{ color: '#3D1C02' }}>
                Message <span className="text-sm ml-1">(required)</span>
              </label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-stone-500 rounded-3xl"
                required
              />
            </div>
            
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-12 py-3 rounded-full text-lg font-normal transition-colors text-center"
                style={{ backgroundColor: '#3D1C02', color: '#ffffff' }}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;