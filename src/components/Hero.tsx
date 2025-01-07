import { useEffect, useState } from "react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2024-12-31T00:00:00");

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
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative text-center text-white z-10 animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-7xl mb-4">Sarah & John</h1>
        <p className="font-inter text-xl mb-8">December 31, 2024</p>
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-playfair text-3xl">{value}</div>
              <div className="font-inter text-sm capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};