const Maps = () => {
  const locations = ["Siljansnäs stugby", "Siljansnäs centrum", "Lundbjörken", "Roddens Hus", "Leksand overview map"];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Maps</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div key={location} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-playfair mb-4">{location}</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                Map placeholder for {location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maps;
