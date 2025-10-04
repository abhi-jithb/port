import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OpeningScene() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-black to-black"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center transition-all duration-2000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse-slow">
            <span className="text-5xl font-bold text-white">A</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Abhijith
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light animate-fade-in-delay">
          A builder of products, communities, and stories
        </p>

        <div className="mt-12 animate-bounce">
          <p className="text-gray-400 text-sm mb-2">Scroll to begin the journey</p>
          <ChevronDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
