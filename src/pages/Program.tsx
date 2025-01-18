const Program = () => {
  const schedule = [
    {
      date: "Friday, June 13th",
      events: [
        { time: "14:00", description: "Welcome Reception" },
        { time: "18:00", description: "Dinner" },
      ]
    },
    {
      date: "Saturday, June 14th",
      events: [
        { time: "10:00", description: "Wedding Ceremony" },
        { time: "12:00", description: "Reception" },
        { time: "14:00", description: "Wedding Feast" },
        { time: "20:00", description: "Evening Celebration" },
      ]
    },
    {
      date: "Sunday, June 15th",
      events: [
        { time: "11:00", description: "Farewell Brunch" },
      ]
    }
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