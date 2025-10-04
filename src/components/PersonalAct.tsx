import { Music, Heart, Lightbulb, Coffee, Book, Gamepad as GamepadIcon } from 'lucide-react';
import { useState } from 'react';

interface Passion {
  id: string;
  icon: any;
  title: string;
  description: string;
  emoji: string;
  color: string;
  funFact: string;
}

const passions: Passion[] = [
  {
    id: '1',
    icon: Music,
    title: 'Music Lover',
    description: 'From lo-fi beats while coding to live concerts with friends',
    emoji: '🎵',
    color: 'from-blue-500 to-cyan-500',
    funFact: 'I have a playlist for every mood and project I work on!'
  },
  {
    id: '2',
    icon: Heart,
    title: 'Community Builder',
    description: 'Nothing beats the energy of bringing people together',
    emoji: '❤️',
    color: 'from-rose-500 to-pink-500',
    funFact: 'My friend circle is a constellation of amazing humans who inspire me daily'
  },
  {
    id: '3',
    icon: Lightbulb,
    title: 'Eternal Learner',
    description: 'Always curious, always exploring new ideas and technologies',
    emoji: '💡',
    color: 'from-amber-500 to-yellow-500',
    funFact: 'I learn best by building. Every side project is a new adventure!'
  },
  {
    id: '4',
    icon: Coffee,
    title: 'Late Night Coder',
    description: 'My best ideas come at 2 AM with a cup of coffee',
    emoji: '☕',
    color: 'from-orange-500 to-red-500',
    funFact: 'Coffee to code ratio: Probably unhealthy but totally worth it'
  },
  {
    id: '5',
    icon: Book,
    title: 'Story Collector',
    description: 'Every person has a story, and I love listening to them',
    emoji: '📚',
    color: 'from-green-500 to-emerald-500',
    funFact: 'I believe the best products are built when you understand people\'s stories'
  },
  {
    id: '6',
    icon: GamepadIcon,
    title: 'Gaming Enthusiast',
    description: 'Strategic games and creative worlds fuel my imagination',
    emoji: '🎮',
    color: 'from-purple-500 to-violet-500',
    funFact: 'Video games taught me problem-solving before any coding bootcamp did'
  }
];

export default function PersonalAct() {
  const [revealedFact, setRevealedFact] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-cyan-400 font-mono tracking-wider">ACT II</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Human Behind the Code
          </h2>
          <p className="text-xl text-gray-400">Life is more than just tech</p>
        </div>

        <div className="mb-20">
          <div className="relative bg-slate-800/50 rounded-3xl p-12 border border-slate-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">🧑‍💻</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  More Than Just a Developer
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  I believe in building products that matter, creating communities that inspire,
                  and living a life full of meaningful connections and adventures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((passion) => (
            <div
              key={passion.id}
              className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setRevealedFact(revealedFact === passion.id ? null : passion.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${passion.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{passion.emoji}</div>
                  <passion.icon className={`text-transparent bg-gradient-to-r ${passion.color} bg-clip-text`} size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{passion.title}</h3>
                <p className="text-gray-400 mb-4">{passion.description}</p>

                {revealedFact === passion.id ? (
                  <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700 animate-fade-in">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Fun Fact</span>
                    <p className="text-white text-sm mt-2">{passion.funFact}</p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 italic">
                    Click to reveal a fun fact ✨
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">🌟</div>
              <h3 className="text-2xl font-bold text-white">My Philosophy</h3>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl italic">
              "Build things that matter, connect with amazing people,
              and never stop learning. The best stories are yet to be written."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
