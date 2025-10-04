import { useState } from 'react';
import { Code, Users, Rocket, Award, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  description: string;
  impact: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: '2BYAG Community',
    year: '2023',
    role: 'Founder & Community Lead',
    description: 'Built a thriving community empowering students beyond academics',
    impact: '500+ members, 20+ events',
    tech: ['Community Building', 'Event Management', 'Leadership'],
    image: '👥'
  },
  {
    id: '2',
    title: 'Hackathon Champion',
    year: '2022-2023',
    role: 'Full-Stack Developer',
    description: 'Won multiple hackathons building innovative solutions',
    impact: '3 winning projects, $10k+ prizes',
    tech: ['React', 'Node.js', 'AI/ML'],
    image: '🏆'
  },
  {
    id: '3',
    title: 'Startup Journey',
    year: '2024',
    role: 'Co-Founder & Tech Lead',
    description: 'Building products that solve real problems for creators',
    impact: 'Active development, Beta launch',
    tech: ['Product Design', 'Full-Stack', 'Cloud'],
    image: '🚀'
  }
];

export default function ProfessionalAct() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-orange-400 font-mono tracking-wider">ACT I</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Origin Story
          </h2>
          <p className="text-xl text-gray-400">Every hero has a beginning</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-rose-500"></div>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative mb-20 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}>
                <div
                  className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">{project.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-orange-400 font-mono">{project.year}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-sm text-gray-400">{project.role}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                    </div>
                  </div>

                  {selectedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-slate-800 animate-fade-in">
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Impact</span>
                        <p className="text-white mt-1">{project.impact}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Technologies</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-4 text-orange-400 text-sm">
                    <span>View details</span>
                    <ChevronRight size={16} className={`transform transition-transform ${selectedProject === project.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-slate-950 shadow-lg shadow-orange-500/50"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { icon: Code, label: 'Projects', value: '15+' },
            { icon: Users, label: 'Community', value: '500+' },
            { icon: Rocket, label: 'Startups', value: '2' },
            { icon: Award, label: 'Hackathons', value: '5+' }
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800">
              <stat.icon className="mx-auto mb-3 text-orange-400" size={32} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
