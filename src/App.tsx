import { useEffect, useState } from 'react';
import OpeningScene from './components/OpeningScene';
import ProfessionalAct from './components/ProfessionalAct';
import PersonalAct from './components/PersonalAct';
import FutureAct from './components/FutureAct';
import ClosingScene from './components/ClosingScene';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed top-6 right-6 z-50 p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-full text-gray-400 hover:text-white hover:border-orange-500/50 transition-all duration-300"
        title={soundEnabled ? 'Mute sound' : 'Enable sound'}
      >
        {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <OpeningScene />
      <ProfessionalAct />
      <PersonalAct />
      <FutureAct />
      <ClosingScene />
    </div>
  );
}

export default App;
