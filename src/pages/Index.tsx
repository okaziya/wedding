import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { EventDetails } from "@/components/EventDetails";
import { RSVP } from "@/components/RSVP";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-background">
      <Hero />
      <OurStory />
      <EventDetails />
      <RSVP />
    </div>
  );
};

export default Index;