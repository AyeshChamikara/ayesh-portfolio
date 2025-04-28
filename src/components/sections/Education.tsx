import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  type: 'education' | 'experience';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: 'Bachelor of Info & Communication Technology',
    location: 'University of Colombo',
    description: 'Studied ICT with a focus on web & System development, algorithms, and database systems.',
    date: '2021 - 2025',
    type: 'education',
  },
  {
    id: 2,
    title: 'Certificate of Advanced Level',
    location: 'C.W.W.Kannangara Central Collage',
    description: 'Studied Bio System Technology for A/L, and passed. Also I have knowledge about Agriculture.',
    date: '2017 - 2020',
    type: 'education',
  },
  {
    id: 3,
    title: 'Web Developer Internship',
    location: 'Web C Lanka.',
    description: 'Worked on various web projects using HTML, CSS, JavaScript, Wordpress and various frameworks.',
    date: 'Summer 2025',
    type: 'experience',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    location: 'Digital Innovations',
    description: 'Developed responsive web applications and collaborated with design and backend teams.',
    date: '2022 - Present',
    type: 'experience',
  },
  {
    id: 5,
    title: 'Web Development Certification',
    location: 'Online Academy',
    description: 'Comprehensive certification covering modern web development frameworks and best practices.',
    date: '2021',
    type: 'education',
  },
];

const Education: React.FC = () => {
  const educationItems = timelineItems.filter(item => item.type === 'education');
  const experienceItems = timelineItems.filter(item => item.type === 'experience');

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">My Background</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Education & Experience</h3>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My academic journey and professional experiences that have shaped my skills and knowledge.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 inline-block border-b-2 border-blue-200 dark:border-blue-700 pb-2">Education</h4>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-700 last:border-0 last:pb-0 group"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 shadow-md group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <div className="animate-fadeInLeft" style={{ animationDelay: `${index * 0.15}s` }}>
                    <time className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 block">{item.date}</time>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{item.location}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 inline-block border-b-2 border-blue-200 dark:border-blue-700 pb-2">Experience</h4>
            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-700 last:border-0 last:pb-0 group"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 shadow-md group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <div className="animate-fadeInRight" style={{ animationDelay: `${index * 0.15}s` }}>
                    <time className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 block">{item.date}</time>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{item.location}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;