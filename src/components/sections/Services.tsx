import React from 'react';
import { Code, Layout, Database, Laptop, Pen, Search } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive, fast, and modern websites with the latest technologies.',
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with a focus on user experience.',
    icon: <Layout className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 3,
    title: 'Database Design',
    description: 'Designing efficient and scalable database structures for your applications.',
    icon: <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 4,
    title: 'Web App Development',
    description: 'Developing web applications for any type of ideas.',
    icon: <Laptop className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 5,
    title: 'Content Creation',
    description: 'Creating engaging and SEO-friendly content for your website or blog.',
    icon: <Pen className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 6,
    title: 'SEO Optimization',
    description: 'Improving your website visibility in search engines for better traffic.',
    icon: <Search className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">What I Do</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">My Services</h3>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I offer a wide range of services to help businesses grow and succeed in the digital world.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-8 transition-all duration-300 hover-lift animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 animate-rotateIn" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;