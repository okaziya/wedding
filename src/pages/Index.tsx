
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { EventDetails } from "@/components/EventDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-background">
      <Hero />
      <h2 className="font-[Merriweather] font-bold text-4xl text-center my-8">Our Story</h2>
      <OurStory />
      <EventDetails />
    </div>
  );
};

export default Index;
