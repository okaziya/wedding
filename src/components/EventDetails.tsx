
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export const EventDetails = () => {
  return (
    <section className="py-20 bg-wedding-primary/20" id="details">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-wedding-accent">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="animate-fade-in bg-white">
            <div className="p-6">
              <h3 className="font-satisfy font-normal text-3xl mb-4 text-wedding-accent">Reception</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">17:00 CET on Friday, June 13th</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">
                    Roddens Hus
                    <br />
                    Västanvik
                    <br />
                    Leksand, Sweden
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="animate-fade-in bg-white">
            <div className="p-6">
              <h3 className="font-satisfy font-normal text-3xl mb-4 text-wedding-accent">Ceremony</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">15:00 CET on Saturday, June 14th</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-wedding-secondary" />
                  <span className="font-inter">
                    Siljansnäs kyrka
                    <br />
                    Leksand
                    <br />
                    Dalarna, Sweden
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
