import { Sparkles, Target, Globe, Zap } from 'lucide-react';

interface Vision {
  id: string;
  icon: any;
  title: string;
  description: string;
  emoji: string;
}

const visions: Vision[] = [
  {
    id: '1',
    icon: Sparkles,
    title: 'Build Products That Empower Creators',
    description: 'Creating tools that help people bring their ideas to life and share their stories with the world',
    emoji: '✨'
  },
  {
    id: '2',
    icon: Globe,
    title: 'Scale 2BYAG Beyond Borders',
    description: 'Inspiring students globally to explore beyond academics and discover their true potential',
    emoji: '🌍'
  },
  {
    id: '3',
    icon: Zap,
    title: 'Lead Open-Source Projects',
    description: 'Contributing to the developer community by building tools that solve real problems',
    emoji: '⚡'
  },
  {
    id: '4',
    icon: Target,
    title: 'Mentor the Next Generation',
    description: 'Sharing knowledge and helping aspiring builders navigate their journey',
    emoji: '🎯'
  }
];

export default function FutureAct() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-purple-400 font-mono tracking-wider">ACT III</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            The Next Chapter
          </h2>
          <p className="text-xl text-gray-400">Where the story gets even better</p>
        </div>

        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <div className="text-center">
              <div className="text-7xl mb-6">🚀</div>
              <h3 className="text-4xl font-bold text-white mb-6">
                The Future is Unwritten
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Every great story has a beginning, a middle, and an endless possibility of futures.
                This is where I am now—at the edge of infinite potential, ready to write the next chapters
                of my journey.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {visions.map((vision, index) => (
            <div
              key={vision.id}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{vision.emoji}</div>
                <vision.icon className="text-purple-400 group-hover:text-pink-400 transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{vision.title}</h3>
              <p className="text-gray-400 leading-relaxed">{vision.description}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-1">
            <div className="bg-black rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                This Story is Just Beginning
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The best movies are the ones where you can't wait to see what happens next.
                I'm living mine, one scene at a time.
              </p>
              <div className="inline-flex gap-4">
                <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold">
                  Coming Soon
                </div>
                <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
                  More Chapters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
