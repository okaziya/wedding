import { Card } from "@/components/ui/card";

export const OurStory = () => {
  const timeline = [
    {
      date: "June 11th 2024",
      title: "First Meeting",
      description: "We met at a local coffee shop on a rainy Sunday morning.",
    },
    {
      date: "December 2020",
      title: "First Date",
      description: "Dinner at our favorite Italian restaurant in the city.",
    },
    {
      date: "August 2023",
      title: "The Proposal",
      description: "A surprise proposal during our vacation in Paris.",
    },
  ];

  return (
    <section className="py-20 bg-wedding-background" id="our-story">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-wedding-accent">
          Our Story
        </h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <Card key={index} className="mb-8 animate-fade-in bg-white/80 backdrop-blur-sm">
              <div className="p-6">
                <div className="font-playfair text-xl text-wedding-secondary mb-2">
                  {event.date}
                </div>
                <h3 className="font-playfair text-2xl mb-2 text-wedding-accent">
                  {event.title}
                </h3>
                <p className="font-inter text-gray-600">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};