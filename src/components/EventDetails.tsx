import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export const EventDetails = () => {
  return (
    <section className="py-20 bg-wedding-primary/20" id="details">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-wedding-accent">
          Event Details
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="animate-fade-in bg-white">
            <div className="p-6">
              <h3 className="font-playfair text-2xl mb-4 text-wedding-accent">Ceremony</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">15:00 CET</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">
                    Siljansnäs kyrka<br />
                    Leksand<br />
                    Dalarna, Sweden
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="animate-fade-in bg-white">
            <div className="p-6">
              <h3 className="font-playfair text-2xl mb-4 text-wedding-accent">Reception</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">
                    The Grand Hotel<br />
                    456 Celebration St<br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};