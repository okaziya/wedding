import { useParams, Link } from "react-router-dom";
import { ParticipantImages } from "@/components/participant/ParticipantImages";
import { ParticipantSection } from "@/components/participant/ParticipantSection";
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
  const currentIndex = participants.findIndex(p => p.id === id);
  
  // Calculate previous and next indices
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : participants.length - 1;
  const nextIndex = currentIndex < participants.length - 1 ? currentIndex + 1 : 0;
  
  // Get previous and next participants
  const prevParticipant = participants[prevIndex];
  const nextParticipant = participants[nextIndex];

  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 mt-8 md:mt-0">
          <Link 
            to={`/participants/${prevParticipant.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="text-xs md:text-sm truncate max-w-[120px] md:max-w-none">{prevParticipant.name}</span>
          </Link>
          <Link 
            to={`/participants/${nextParticipant.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <span className="text-xs md:text-sm truncate max-w-[120px] md:max-w-none">{nextParticipant.name}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-playfair mb-6 md:mb-12 text-center break-words">
            {details.title}
          </h1>

          <ParticipantImages 
            images={details.images} 
            image={details.image} 
            title={details.title}
          />
          
          <div className="space-y-6 w-full">
            {details.welcomeMessage && (
              <ParticipantSection 
                title="Welcome Message" 
                content={details.welcomeMessage} 
              />
            )}

            {details.description && (
              <ParticipantSection 
                title="Description" 
                content={details.description} 
              />
            )}

            {details.accommodation && (
              <ParticipantSection 
                title="Accommodation" 
                content={details.accommodation}
              >
                <Link to="/maps" className="text-blue-600 hover:underline mt-2 inline-block">
                  View Maps
                </Link>
              </ParticipantSection>
            )}

            {details.travelPlans && (
              <ParticipantSection 
                title="Anticipated Travel Plans" 
                content={details.travelPlans} 
              />
            )}

            {details.packingList && (
              <ParticipantSection 
                title="Packing List" 
                content={details.packingList} 
              />
            )}

            {details.contact && (
              <ParticipantSection 
                title="Contact" 
                content={details.contact} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;