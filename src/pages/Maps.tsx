const Maps = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-wedding-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Maps</h1>
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg w-full max-w-[595px]">
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

export default Maps;
