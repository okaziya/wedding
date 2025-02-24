
import { useEffect, useState } from "react";
import upperOrnament from "/images/lm-ornament-upper.svg";
import lowerOrnament from "/images/lm-ornament-lower.svg";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
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
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wedding-background">
      <div className="w-full max-w-xl mx-auto px-4 text-center space-y-12">
        <img src={upperOrnament} alt="Upper ornament" className="w-full max-w-md mx-auto" />
        
        <div className="space-y-8">
          <h1 className="font-satisfy text-6xl md:text-7xl">
            <span className="text-[#571E25]">Mats</span>{" "}
            <span className="text-[#DF980C]">&</span>{" "}
            <span className="text-[#571E25]">Liza</span>
          </h1>
          
          <div className="text-4xl font-satisfy text-[#571E25]">
            <span>20</span>
            <span className="relative">
              14
              <span className="absolute -top-2 text-lg">/6</span>
            </span>
            <span>25</span>
          </div>

          <div className="flex justify-center gap-16 md:gap-24 text-[#B14B57]">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-satisfy text-5xl">{value}</div>
                <div className="font-playfair text-sm tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <img src={lowerOrnament} alt="Lower ornament" className="w-full max-w-sm mx-auto" />
      </div>
    </div>
  );
};
