import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { EventDetails } from "@/components/EventDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-background">
      <Hero />
      <OurStory />
      <EventDetails />
    </div>
  );
};

export default Index;
