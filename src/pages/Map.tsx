
const Map = () => {
  return (
    <div className="min-h-screen pt-6rem px-1rem bg-wedding-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-merriweather mb-3rem text-center">Map</h1>
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-1.5rem shadow-lg w-full max-w-[595px]">
            {" "}
            {/* A4 width in pixels */}
            <div className="aspect-[1/1.4142]">
              {" "}
              {/* A4 aspect ratio */}
              <img
                src="/wedding/images/area-map.png"
                alt="Area map"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
