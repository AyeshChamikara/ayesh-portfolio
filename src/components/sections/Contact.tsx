import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Email',
    content: 'chamikaraayesh6@gmail.com',
    link: 'mailto:chamikaraayesh6@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Phone',
    content: '+94 (779) 930-386',
    link: 'tel:+94779930386',
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Location',
    content: 'Kopiwatte, Welipenna, Mathugama, Sri Lanka',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        message: 'Please fill in all fields.',
        isError: true,
      });
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        isError: true,
      });
      return;
    }
  
    emailjs
      .send(
        'service_k5td1lf', // Replace with your EmailJS service ID
        'template_xlgr6nl', // Replace with your EmailJS template ID
        formData,
        'MNonGfo9jcRG3auZC' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setFormStatus({
            message: 'Your message has been sent successfully! I will get back to you soon.',
            isError: false,
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setFormStatus({
            message: 'There was an error sending your message. Please try again later.',
            isError: true,
          });
          console.error(error);
        }
      );
  
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Get in Touch</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Contact Me</h3>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Let's Talk</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fadeInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">{info.icon}</div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">{info.title}</h5>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-50 dark:bg-dark-card rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Hello, I would like to discuss a project..."
                  ></textarea>
                </div>
                
                {formStatus && (
                  <div 
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.isError 
                        ? 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200' 
                        : 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium 
                  transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;