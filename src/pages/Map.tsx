import build_info from "@/build-info.json";

const Map = () => {
  console.log(
    `Render Map page with revision ${build_info.GITHUB_SHA_SHORT} (${build_info.COMMIT_URL}), built at ${build_info.BUILD_TIMESTAMP} by ${build_info.GITHUB_ACTOR}`
  );
  return (
    <div className="min-h-screen pt-24 px-4 bg-wedding-background pb-6 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex overflow-x-scroll custom-scrollbar">
          <div className="w-full min-w-[736px]">
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
