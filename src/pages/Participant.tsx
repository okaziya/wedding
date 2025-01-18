import { useParams } from "react-router-dom";

const Participant = () => {
  const { id } = useParams();
  
  const getParticipantDetails = (participantId: string) => {
    console.log("Getting details for participant:", participantId);
    if (participantId === "ira") {
      return {
        role: "Mother of the Bride",
        description: "Ira is the bride's mother and plays a special role in this celebration."
      };
    }
    return null;
  };

  const details = id ? getParticipantDetails(id) : null;
  
  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair mb-6 md:mb-12 text-center break-words">
          {id?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
          {details ? (
            <div className="space-y-4">
              <p className="text-lg font-medium text-center">{details.role}</p>
              <p className="text-center text-base md:text-lg">{details.description}</p>
            </div>
          ) : (
            <p className="text-center text-base md:text-lg">Participant details coming soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Participant;