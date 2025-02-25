
import { useParams, Link } from "react-router-dom";
import { ParticipantImages } from "@/components/participant/ParticipantImages";
import { getParticipantDetails } from "@/utils/participantData";
import { participants } from "@/components/navigation/MenuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
          <Link
            to={`/participants/${prevParticipant.id}`}
            className="flex items-center gap-2 text-[#B14B57] hover:text-[#571E25]"
          >
            <ChevronLeft className="h-4 w-4 flex-shrink-0" />
            <span className="text-[10px] md:text-sm text-left leading-tight">{prevParticipant.name}</span>
          </Link>
          <Link
            to={`/participants/${nextParticipant.id}`}
            className="flex items-center gap-2 text-[#B14B57] hover:text-[#571E25]"
          >
            <span className="text-[10px] md:text-sm text-right leading-tight">{nextParticipant.name}</span>
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 mt-6 md:mt-0">
          <img src="/wedding/images/lm-ornament-flower.svg" alt="Upper ornament" className="w-8 h-auto" />
          <h1 className="text-5xl font-satisfy text-center break-words text-[#571E25]">{details.title}</h1>
          <ParticipantImages images={details.images} image={details.image} title={details.title} />

          <div className="space-y-1 w-full">
            {details.welcomeMessage && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Welcome Message</h2>
                  <p className="font-merriweather text-gray-600 text-center">{details.welcomeMessage}</p>
                </div>
              </div>
            )}

            {details.description && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Description</h2>
                  <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">
                    {details.description}
                  </p>
                </div>
              </div>
            )}

            {details.accommodation && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Accommodation</h2>
                  <p className="font-merriweather text-gray-600 text-center">{details.accommodation}</p>
                  <div className="text-center mt-4">
                    <Link to="/maps" className="text-[#571E25] hover:underline">
                      View Maps
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {details.travelPlans && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Anticipated Travel Plans</h2>
                  <p className="font-merriweather text-gray-600 text-center">{details.travelPlans}</p>
                </div>
              </div>
            )}

            {details.packingList && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Packing List</h2>
                  <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">
                    {details.packingList}
                  </p>
                </div>
              </div>
            )}

            {details.contact && (
              <div className="bg-white px-[64px] py-[48px]">
                <div className="relative">
                  <img
                    src="/wedding/images/lm-ornament-flower.svg"
                    alt="Decorative flower"
                    className="w-6 h-auto mx-auto mb-4"
                  />
                  <h2 className="font-satisfy text-2xl text-[#571E25] text-center mb-5">Contact</h2>
                  <p className="font-merriweather text-gray-600 text-center whitespace-pre-line">{details.contact}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;

