
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { EventDetails } from "@/components/EventDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-background">
      <Hero />
      <div className="max-w-[750px] mx-auto px-4 mb-20">
        <img 
          src="/wedding/images/our-story/240614.jpeg" 
          alt="Mats and Liza commitment photo" 
          className="w-full border-[5px] border-solid border-white"
        />
      </div>
      <OurStory />
      <EventDetails />
    </div>
  );
};

export default Index;
