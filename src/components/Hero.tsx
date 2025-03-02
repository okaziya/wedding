
import { useEffect, useState } from "react";
import upperOrnament from "/images/lm-ornament-upper.svg";
import lowerOrnament from "/images/lm-ornament-lower.svg";
import weddingDateImage from "/images/lm-wedding-date.png";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-06-14T13:00:00"); // UTC time

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-6rem flex flex-col items-center justify-center bg-wedding-background">
      <div className="w-full max-w-xl mx-auto px-1rem text-center space-y-1.5rem mb-1.5rem md:my-1rem md:mb-1rem">
        <img src={upperOrnament} width={328} alt="Upper ornament" className="mx-auto" />

        <div className="space-y-2rem">
          <h1 className="font-satisfy text-6xl md:text-7xl">
            <span className="text-[#571E25]">Mats</span> <span className="text-[#DF980C]">&</span>{" "}
            <span className="text-[#571E25]">Liza</span>
          </h1>

          <img src={weddingDateImage} alt="Wedding date image" width={94} className="mx-auto" />

          <div className="flex justify-center gap-1.5rem text-[#B14B57]">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center min-w-[5rem] h-[3.625rem]">
                <div className="font-satisfy text-3xl mb-0.25rem">{value}</div>
                <div className="font-merriweather text-sm tracking-wider text-[#571E25] font-bold">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <img src={lowerOrnament} alt="Lower ornament" width={174} className="mx-auto" />
      </div>
    </div>
  );
};
