import { useEffect, useState } from "react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-06-14T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5")', // Swedish wildflower meadow with traditional red Dalarna houses in background
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>
      
      {/* Rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-rain bg-blue-200/10 w-[1px] h-[10px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.8 + Math.random() * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative text-center text-white z-10 animate-fade-in">
        <h1 className="font-mono text-6xl md:text-7xl mb-4">Mats & Liza</h1>
        <p className="font-mono text-xl mb-8">June 14, 2025</p>
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-mono text-3xl">{value}</div>
              <div className="font-mono text-sm capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};