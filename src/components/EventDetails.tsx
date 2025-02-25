import clockImage from "/images/lm-icon-clock.png";
import dateImage from "/images/lm-icon-date.png";
import placeImage from "/images/lm-icon-place.png";

export const EventDetails = () => {
  return (
    <section className="py-20 " id="details">
      <div className="container mx-auto px-4">
        <div className="max-w-[900px] mx-auto bg-white p-12 rounded-lg">
          <div className="flex flex-col items-center">
            <img src="/wedding/images/lm-ornament-flower.svg" alt="Decorative flower" className="w-8 h-auto mb-4" />
            <h2 className="font-merriweather text-center text-[#571E25] text-2xl font-bold">Event Details</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="font-satisfy text-3xl mb-6 text-[#B14B57] text-center">Reception</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img src={dateImage} alt="Date image" width={24} />
                  <span className="font-merriweather text-lg">Friday, June 13th</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={clockImage} alt="Clock image" width={24} />
                  <span className="font-merriweather text-lg">17:00</span>
                </div>
                <div className="flex items-start gap-3">
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

            <div className="p-8">
              <h3 className="font-satisfy text-3xl mb-6 text-[#B14B57] text-center">Ceremony</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img src={dateImage} alt="Date image" width={24} />
                  <span className="font-merriweather text-lg">Saturday, June 14th</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={clockImage} alt="Clock image" width={24} />
                  <span className="font-merriweather text-lg">15:00 CET</span>
                </div>
                <div className="flex items-start gap-3">
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
