import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { cn } from "@/lib/utils.ts";

const Vision = () => {
  const imageClasses = cn(
    "object-cover w-full h-full",
    "border-[5px] border-solid border-white rounded-[2px]",
    "shadow-[0px_6px_32px_rgba(48,40,24,0.15)]",
    "bg-transparent"
  );

  return (
    <div className="min-h-screen pt-24 pb-12 bg-wedding-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={upperOrnamentImage} alt="Upper ornament image" width={328} />
          <h1 className="font-satisfy text-4xl md:text-5xl text-center text-[#571E25] py-4">Vision & Mission</h1>
          <img src={lowerOrnamentImage} alt="Lower ornament image" width={174} />
        </div>

        <div className="max-w-[750px] mx-auto px-4 mb-6 mt-6">
          <AspectRatio ratio={4 / 3} className="rounded-lg">
            <div className="w-full h-full">
              <div className="w-full h-full transform -rotate-1">
                <img
                  src="/wedding/images/our-story/240620.jpeg"
                  alt="Mats and Liza commitment photo"
                  className={imageClasses}
                />
              </div>
            </div>
          </AspectRatio>
        </div>

        <div className="bg-white px-6 md:px-16 pt-12 pb-16 mb-8 rounded-sm mt-16">
          <div className="relative">
            <p className="mb-4 font-merriweather">
              <span className="font-bold">Our vision for this event</span> is to gather our closest family and friends
              to celebrate our deep commitment to building the future together as a couple. We celebrate Faith, Loyalty,
              and Unending Dedication to overcoming life's challenges until they're finished, one day at a time.
            </p>

            <p className="mb-6 font-merriweather ">
              <span className="font-bold">The mission for this event</span> is to create a meet-and-greet for our close
              friends and family. The location is set to Mats' home village, where his ancestors lived and thrived for
              generations. We hope you will enjoy the peaceful atmosphere, the closeness to nature and God's blessings
              over all of us.
            </p>

            <div className="max-w-md mx-auto mt-8 md:mt-16">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-8 h-auto mx-auto mb-4"
              />
              <p className="font-bold mb-2 font-merriweather text-center text-[#571E25] text-2xl">What to expect:</p>
              <ul className="list-disc pl-2 md:pl-6 space-y-2 text-xl font-merriweather text-gray-600 mt-8">
                <li className="flex  items-center before:content-['•'] before:text-[#DF980C] before:text-3xl before:mr-3 before:inline-block">
                  <span>Out-doorsy activities and fun</span>
                </li>
                <li className="flex items-center before:content-['•'] before:text-[#DF980C] before:text-3xl before:mr-3 before:inline-block">
                  <span>Healthy and tasty foods</span>
                </li>
                <li className="flex items-center before:content-['•'] before:text-[#DF980C] before:text-3xl before:mr-3 before:inline-block">
                  <span>Kindness and respect for our differences</span>
                </li>
                <li className="flex items-center before:content-['•'] before:text-[#DF980C] before:text-3xl before:mr-3 before:inline-block">
                  <span>No drugs/alcohol</span>
                </li>
                <li className="flex items-center before:content-['•'] before:text-[#DF980C] before:text-3xl before:mr-3 before:inline-block">
                  <span>Child-friendly atmosphere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
