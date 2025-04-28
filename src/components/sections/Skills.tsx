import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express.js', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  { name: 'SQL', level: 60, category: 'backend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Laravel', level: 80, category: 'other' },
  { name: 'Git', level: 85, category: 'other' },
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.setProperty('--skill-level', `${skill.level}%`);
          barRef.current.classList.add('animate-fillBar');
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div 
      className="mb-6 animate-fadeInLeft"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          ref={barRef}
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'design' || skill.category === 'other');

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">My Expertise</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Skills & Experience</h3>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A display of my technical skills and competencies that I've developed over the years.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-6 animate-slideIn" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-200 dark:border-blue-900 pb-2">Frontend Development</h4>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          <div className="space-y-6 animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-200 dark:border-blue-900 pb-2">Backend Development</h4>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          <div className="space-y-6 animate-slideIn" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-200 dark:border-blue-900 pb-2">Design & Other Skills</h4>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;