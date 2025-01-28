import { useParams, Link } from "react-router-dom";
import { ParticipantImages } from "@/components/participant/ParticipantImages";
import { ParticipantSection } from "@/components/participant/ParticipantSection";
import { getParticipantDetails } from "@/utils/participantData";

const Participant = () => {
  const { id } = useParams();
  const details = id ? getParticipantDetails(id) : null;
  
  if (!details) {
    return <div>Participant not found</div>;
  }

  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
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