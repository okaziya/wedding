
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { EventDetails } from "@/components/EventDetails";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const Index = () => {
  const imageClasses = cn(
    "object-cover w-full h-full",
    "border-[5px] border-solid border-white rounded-[2px]",
    "shadow-[0px_6px_32px_rgba(48,40,24,0.15)]",
    "bg-transparent"
  );

  return (
    <div className="min-h-screen bg-wedding-background">
      <Hero />
      <div className="max-w-[750px] mx-auto px-4 mb-6">
        <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
          <div className="w-full h-full">
            <div className="w-full h-full transform -rotate-1">
              <img
                src="/wedding/images/our-story/240614.jpeg"
                alt="Mats and Liza commitment photo"
                className={imageClasses}
              />
            </div>
          </div>
        </AspectRatio>
      </div>
      <EventDetails />
      <OurStory />
    </div>
  );
};

export default Index;
