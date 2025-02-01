const Program = () => {
  const schedule = [
    {
      date: "Friday, June 13th",
      events: [
        { time: "15:00", description: "Wedding Ceremony at Siljansnäs kyrka" },
        { time: "17:00", description: "Reception at Roddens Hus, Västanvik" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Event Program</h1>
        <div className="space-y-12">
          {schedule.map((day) => (
            <div key={day.date} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-playfair mb-4">{day.date}</h2>
              <div className="space-y-4">
                {day.events.map((event) => (
                  <div key={event.time} className="flex items-center space-x-4">
                    <span className="text-lg font-mono w-24">{event.time}</span>
                    <span className="text-lg">{event.description}</span>
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
