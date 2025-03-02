
import clockImage from "/images/lm-icon-clock.png";
import dateImage from "/images/lm-icon-date.png";
import placeImage from "/images/lm-icon-place.png";

export const EventDetails = () => {
  return (
    <section className="py-5rem " id="details">
      <div className="container mx-auto px-1rem">
        <div className="max-w-[900px] mx-auto bg-white p-3rem rounded-lg">
          <div className="flex flex-col items-center">
            <img src="/wedding/images/lm-ornament-flower.svg" alt="Decorative flower" className="w-2rem h-auto mb-1rem" />
            <h2 className="font-merriweather text-center text-[#571E25] text-2xl font-bold mb-1.5rem">Event Details</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-2rem">
            <div className="px-md-2rem">
              <h3 className="font-satisfy text-3xl mb-1.5rem text-[#B14B57] text-center">Reception</h3>
              <div className="space-y-1.5rem">
                <div className="flex items-center gap-0.75rem">
                  <img src={dateImage} alt="Date image" width={24} />
                  <span className="font-merriweather text-lg">Friday, June 13th</span>
                </div>
                <div className="flex items-center gap-0.75rem">
                  <img src={clockImage} alt="Clock image" width={24} />
                  <span className="font-merriweather text-lg">17:00</span>
                </div>
                <div className="flex items-start gap-0.75rem">
                  <img src={placeImage} alt="Place image" width={24} />
                  <div className="font-merriweather text-lg">
                    Roddens Hus
                    <br />
                    Västanvik
                    <br />
                    Leksand, Sweden
                  </div>
                </div>
              </div>
            </div>

            <div className="px-md-2rem">
              <h3 className="font-satisfy text-3xl mb-1.5rem text-[#B14B57] text-center">Ceremony</h3>
              <div className="space-y-1.5rem">
                <div className="flex items-center gap-0.75rem">
                  <img src={dateImage} alt="Date image" width={24} />
                  <span className="font-merriweather text-lg">Saturday, June 14th</span>
                </div>
                <div className="flex items-center gap-0.75rem">
                  <img src={clockImage} alt="Clock image" width={24} />
                  <span className="font-merriweather text-lg">15:00 CET</span>
                </div>
                <div className="flex items-start gap-0.75rem">
                  <img src={placeImage} alt="Place image" width={24} />
                  <div className="font-merriweather text-lg">
                    Siljansnäs kyrka
                    <br />
                    Leksand
                    <br />
                    Dalarna, Sweden
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
