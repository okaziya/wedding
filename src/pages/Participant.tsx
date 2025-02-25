import { useParams, Link } from "react-router-dom";
import { ParticipantImages } from "@/components/participant/ParticipantImages";
import { ParticipantSection } from "@/components/participant/ParticipantSection";
import { getParticipantDetails } from "@/utils/participantData";
import { participants } from "@/components/navigation/MenuItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

import upperOrnametImage from "/images/lm-ornament-upper.png";
import lowerOrnametImage from "/images/lm-ornament-lower.png";

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
      <div className="max-w-4xl mx-auto">
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
          <img src={upperOrnametImage} alt="Upper ornamet image" width={328} />
          <h1 className="text-5xl font-satisfy text-center break-words">{details.title}</h1>
          <img src={lowerOrnametImage} alt="Lower ornamet image" width={174} />

          <ParticipantImages images={details.images} image={details.image} title={details.title} />

          <div className="space-y-6 w-full">
            {details.welcomeMessage && <ParticipantSection title="Welcome Message" content={details.welcomeMessage} />}

            {details.description && <ParticipantSection title="Description" content={details.description} />}

            {details.accommodation && (
              <ParticipantSection title="Accommodation" content={details.accommodation}>
                <Link to="/maps" className="text-[#571E25] hover:underline mt-2 inline-block">
                  View Maps
                </Link>
              </ParticipantSection>
            )}

            {details.travelPlans && (
              <ParticipantSection title="Anticipated Travel Plans" content={details.travelPlans} />
            )}

            {details.packingList && <ParticipantSection title="Packing List" content={details.packingList} />}

            {details.contact && <ParticipantSection title="Contact" content={details.contact} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;
