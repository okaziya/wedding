import clockImage from "/images/lm-icon-clock.png";
import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";

const Program = () => {
  const schedule = [
    {
      date: "Friday, June 13th",
      events: [
        { time: "17:00–17:15", description: "Official reception at Roddens Hus (bring your gym clothes!)" },
        { time: "17:30–18:30", description: "Guided circle training at Roddens Hus" },
        { time: "19:00–20:30", description: "Welcome dinner at Roddens Hus" },
        { time: "20:30–21:15", description: "Liza drives train travelers from Leksand station" },
        { time: "21:30–22:00", description: "Everyone goes to their accommodations and sleep" },
      ],
    },
    {
      date: "Saturday, June 14th",
      events: [
        { time: "08:00–09:00", description: "Common breakfast in the Stugbyn conference room" },
        { time: "11:30–12:30", description: "Lunch at Roddens Hus" },
        { time: "15:00–15:30", description: "Ceremony at Siljansnäs church" },
        { time: "15:30–16:00", description: "Liza & Mats in photography session with Lena" },
        { time: "17:30–19:30", description: "Main wedding dinner at Roddens Hus" },
        { time: "19:30–21:30", description: "Games and tournaments!" },
        { time: "21:30–22:00", description: "Everyone goes to their accommodations and sleep" },
      ],
    },
    {
      date: "Sunday, June 15th",
      events: [
        { time: "08:00–09:00", description: "Common breakfast in the Stugbyn conference room" },
        { time: "09:30–10:30", description: "Guided circle training at Roddens Hus (bring gym clothes!)" },
        {
          time: "10:30–11:30",
          description: "Accommodation check-out for participants staying in the Siljansnäs Stugby cottages",
        },
        {
          time: "12:00–13:00",
          description: "Lunch at Roddens Hus (outdoorsy casual clothes, it can rain out on the sea)",
        },
        {
          time: "13:00–16:00",
          description: "Presentation about the local church boats followed by rowing on the Siljan sea",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-wedding-background">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={upperOrnamentImage} alt="Upper ornamet image" width={328} />
          <h1 className="font-satisfy text-4xl md:text-5xl text-center text-[#571E25] py-4">Schedule</h1>
          <img src={lowerOrnamentImage} alt="Lower ornamet image" width={174} />
        </div>
        <div className="pb-20">
          {schedule.map((day) => (
            <div key={day.date} className="bg-white rounded-sm px-6 md:px-16 pt-12 pb-16 mb-1">
              <div className="flex flex-col items-center mb-8">
                <img src="/wedding/images/lm-ornament-flower.svg" alt="Decorative flower" className="w-6 h-auto mb-4" />
                <h2 className="font-satisfy text-3xl text-[#B14B57] mb-1">{day.date}</h2>
              </div>
              <div className="space-y-7">
                {day.events.map((event) => (
                  <div key={event.time} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2">
                      <img src={clockImage} alt="Clock image" width={24} className="flex-shrink-0" />
                      <span className="text-lg font-merriweather font-bold">{event.time}</span>
                    </div>
                    <span className="text-lg font-merriweather text-center">{event.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
