
import { Card } from "@/components/ui/card";
import { MapPin, Clock, CalendarDays } from "lucide-react";

export const EventDetails = () => {
  return (
    <section className="py-20 bg-wedding-primary/20" id="details">
      <div className="container mx-auto px-4">
        <div className="max-w-[900px] mx-auto bg-white p-12 rounded-lg">
          <div className="flex flex-col items-center mb-12">
            <img 
              src="/wedding/images/lm-ornament-flower.svg" 
              alt="Decorative flower" 
              className="w-8 h-auto mb-4"
            />
            <h2 className="font-merriweather text-4xl md:text-5xl text-center text-[#571E25]">Event Details</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in bg-white p-8 border-2">
              <h3 className="font-satisfy text-3xl mb-6 text-[#B14B57] text-center">Reception</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-wedding-secondary flex-shrink-0" />
                  <span className="font-merriweather text-lg">Friday, June 13th</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-wedding-secondary flex-shrink-0" />
                  <span className="font-merriweather text-lg">17:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-wedding-secondary flex-shrink-0 mt-1" />
                  <div className="font-merriweather text-lg">
                    Roddens Hus
                    <br />
                    Västanvik
                    <br />
                    Leksand, Sweden
                  </div>
                </div>
              </div>
            </Card>

            <Card className="animate-fade-in bg-white p-8 border-2">
              <h3 className="font-satisfy text-3xl mb-6 text-[#B14B57] text-center">Ceremony</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-wedding-secondary flex-shrink-0" />
                  <span className="font-merriweather text-lg">Saturday, June 14th</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-wedding-secondary flex-shrink-0" />
                  <span className="font-merriweather text-lg">15:00 CET</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-wedding-secondary flex-shrink-0 mt-1" />
                  <div className="font-merriweather text-lg">
                    Siljansnäs kyrka
                    <br />
                    Leksand
                    <br />
                    Dalarna, Sweden
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
