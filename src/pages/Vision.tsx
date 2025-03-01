
import { Card, CardContent } from "@/components/ui/card";
import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";

const Vision = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-wedding-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={upperOrnamentImage} alt="Upper ornament image" width={328} />
          <h1 className="font-satisfy text-4xl md:text-5xl text-center text-[#571E25] py-4">Vision & Mission</h1>
          <img src={lowerOrnamentImage} alt="Lower ornament image" width={174} />
        </div>
        
        <div className="bg-white px-6 md:px-16 pt-12 pb-16 mb-8 rounded-sm">
          <div className="relative">
            <img
              src="/wedding/images/lm-ornament-flower.svg"
              alt="Decorative flower"
              className="w-6 h-auto mx-auto mb-4"
            />
            <p className="mb-4 font-merriweather text-center">
              <span className="font-bold">Our vision for this event</span> is to gather our closest family and friends to celebrate our deep commitment to building the future together as a couple. We celebrate Faith, Loyalty, and Unending Dedication to overcoming life's challenges until they're finished, one day at a time.
            </p>
            
            <p className="mb-6 font-merriweather text-center">
              <span className="font-bold">The mission for this event</span> is to create a meet-and-greet for our close friends and family. The location is set to Mats' home village, where his ancestors lived and thrived for generations. We hope you will enjoy the peaceful atmosphere, the closeness to nature and God's blessings over all of us.
            </p>
            
            <div className="max-w-md mx-auto">
              <p className="font-bold mb-2 font-merriweather text-center">What to expect:</p>
              <ul className="pl-5 space-y-2 font-merriweather marker:text-[#DF980C] marker:text-lg">
                <li>Out-doorsy activities and fun</li>
                <li>Healthy and tasty foods</li>
                <li>Kindness and respect for our differences</li>
                <li>No drugs/alcohol</li>
                <li>Child-friendly atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
