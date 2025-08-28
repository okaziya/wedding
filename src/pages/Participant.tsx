import { useParams, Link } from "react-router-dom";
import { ParticipantImages } from "@/components/participant/ParticipantImages";
import { getParticipantDetails } from "@/utils/participantData";
import { participants } from "@/components/navigation/MenuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";
import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";

const Participant = () => {
  const { id } = useParams();
  const details = id ? getParticipantDetails(id) : null;

  if (!details) {
    return <div>Participant not found</div>;
  }

  // Find current participant index
  const currentIndex = participants.findIndex((p) => p.id === id);

  // Calculate previous and next indices
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : participants.length - 1;
  const nextIndex = currentIndex < participants.length - 1 ? currentIndex + 1 : 0;

  // Get previous and next participants
  const prevParticipant = participants[prevIndex];
  const nextParticipant = participants[nextIndex];

  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4 pb-24 bg-wedding-background">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-between items-center mb-6 mt-8 md:mt-0 gap-4">
          {prevParticipant.id === "couple" ? (
            <Link
              to={`/participants/${prevParticipant.id}`}
              className="flex items-center gap-2 text-[#B14B57] hover:text-[#571E25]"
            >
              <ChevronLeft className="h-4 w-4 flex-shrink-0" />
              <span className="text-md text-left leading-tight font-merriweather">{prevParticipant.name}</span>
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
              <ChevronLeft className="h-4 w-4 flex-shrink-0" />
              <span className="text-md text-left leading-tight font-merriweather">{prevParticipant.name}</span>
            </div>
          )}
          {nextParticipant.id === "couple" ? (
            <Link
              to={`/participants/${nextParticipant.id}`}
              className="flex items-center gap-2 text-[#B14B57] hover:text-[#571E25]"
            >
              <span className="text-md text-right leading-tight font-merriweather">{nextParticipant.name}</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
              <span className="text-md text-right leading-tight font-merriweather">{nextParticipant.name}</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-0">
          <img src={upperOrnamentImage} alt="Upper ornamet image" width={328} />
          <h1 className="text-5xl font-satisfy text-center break-words text-[#571E25] py-4 px-2 overflow-hidden">
            {details.title}
          </h1>
          <img src={lowerOrnamentImage} alt="Lower ornamet image" width={174} />

          <ParticipantImages images={details.images} image={details.image} title={details.title} />

          {id === "couple" && (
            <div className="space-y-1 w-full">
              {details.welcomeMessage && (
                <div className="bg-white px-6 md:px-[64px] py-[48px]">
                  <div className="relative">
                    <img
                      src="/wedding/images/lm-ornament-flower.svg"
                      alt="Decorative flower"
                      className="w-6 h-auto mx-auto mb-4"
                    />
                    <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">
                      Welcome Message
                    </h2>
                    <p className="font-merriweather text-gray-600 text-center">{details.welcomeMessage}</p>
                  </div>
                </div>
              )}

              {details.description && (
                <div className="bg-white px-6 md:px-[64px] py-[48px]">
                  <div className="relative">
                    <img
                      src="/wedding/images/lm-ornament-flower.svg"
                      alt="Decorative flower"
                      className="w-6 h-auto mx-auto mb-4"
                    />
                    <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">Description</h2>
                    <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">
                      {details.description}
                    </p>
                    <h3 className="font-bold font-merriweather mt-6 mb-2 text-center text-lg">Languages</h3>
                    <p className="text-center font-merriweather text-gray-600">{details.languages}</p>
                  </div>
                </div>
              )}

              {details.accommodation && (
                <div className="bg-white px-6 md:px-[64px] py-[48px]">
                  <div className="relative">
                    <img
                      src="/wedding/images/lm-ornament-flower.svg"
                      alt="Decorative flower"
                      className="w-6 h-auto mx-auto mb-4"
                    />
                    <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">
                      Accommodation
                    </h2>
                    <p className="font-merriweather text-gray-600 text-center">{details.accommodation}</p>
                    <div className="text-center mt-8">
                      <Link
                        to="/map"
                        className="inline-block border border-[rgba(250,247,241,1)] text-[#B14B57] hover:text-[#571E25] px-6 py-[15px] font-merriweather uppercase tracking-wider text-[16px]"
                      >
                        VIEW MAP
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {details.travelPlans && (
                <div className="bg-white px-6 md:px-[64px] py-[48px]">
                  <div className="relative">
                    <img
                      src="/wedding/images/lm-ornament-flower.svg"
                      alt="Decorative flower"
                      className="w-6 h-auto mx-auto mb-4"
                    />
                    <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">
                      Anticipated Travel Plans
                    </h2>
                    <p className="font-merriweather text-gray-600 text-center">{details.travelPlans}</p>
                  </div>
                </div>
              )}

              {details.packingList && (
                <div className="bg-white px-6 md:px-[64px] py-[48px]">
                  <div className="relative">
                    <img
                      src="/wedding/images/lm-ornament-flower.svg"
                      alt="Decorative flower"
                      className="w-6 h-auto mx-auto mb-4"
                    />
                    <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">Packing List</h2>
                    <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">
                      {details.packingList}
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-white px-6 md:px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-merriweather text-2xl text-[#571E25] text-center mb-5 font-bold">Contact</h2>
                  <p className="font-merriweather text-gray-800 text-center whitespace-pre-line font-bold mb-2">
                    {details.contactName}
                  </p>
                  <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">
                    <a href={`https://wa.me/${details.contactNumber.replace(/\D/g, "")}`}>{details.contactNumber}</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Participant;
