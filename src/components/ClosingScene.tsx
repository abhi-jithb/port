import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface Social {
  icon: any;
  label: string;
  url: string;
  handle: string;
}

const socials: Social[] = [
  {
    icon: Github,
    label: 'GitHub',
    url: '#',
    handle: '@abhijith'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: '#',
    handle: '/in/abhijith'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    url: '#',
    handle: '@abhijith'
  },
  {
    icon: Mail,
    label: 'Email',
    url: 'mailto:abhijith@example.com',
    handle: 'abhijith@example.com'
  }
];

export default function ClosingScene() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center shadow-2xl shadow-orange-500/50">
              <div className="text-8xl">🎭</div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div className="text-2xl">✨</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            This is Not Just My Portfolio
          </h2>
          <p className="text-3xl md:text-4xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent font-bold mb-8">
            This is My Story
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            And every great story is better when shared with others.
            Let's write the next chapter together.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="group flex items-center gap-4 bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <social.icon className="text-gray-400 group-hover:text-orange-400 transition-colors" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{social.label}</div>
                  <div className="text-gray-500 text-sm">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <a
            href="mailto:abhijith@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>

        <div className="border-t border-slate-800 pt-12">
          <div className="mb-8">
            <h4 className="text-xl text-gray-500 font-mono mb-4">— END CREDITS —</h4>
          </div>

          <div className="space-y-2 text-gray-600 font-mono text-sm mb-8">
            <div>Written, Directed & Produced by Abhijith</div>
            <div>Built with React, TypeScript & Tailwind CSS</div>
            <div>Powered by Passion, Coffee & Late Nights</div>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <span>Made with</span>
              <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={16} />
              <span>in 2024</span>
            </div>
          </div>

          <div className="text-gray-700 text-sm mb-8">
            Special thanks to everyone who believed in me,
            the communities that shaped me,
            and the dreamers who inspire me every day.
          </div>

          <div className="inline-block px-6 py-3 bg-slate-900 border border-slate-800 rounded-full">
            <span className="text-gray-500 font-mono text-sm">
              To be continued... 🎬
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
