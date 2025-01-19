import { useParams } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Participant = () => {
  const { id } = useParams();
  
  const getParticipantDetails = (participantId: string) => {
    console.log("Getting details for participant:", participantId);
    if (participantId === "ira") {
      return {
        role: "Mother of the Bride",
        description: "Ira is the bride's mother and plays a special role in this celebration.",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      };
    }
    return null;
  };

  const details = id ? getParticipantDetails(id) : null;
  
  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Avatar className="h-32 w-32">
            {details?.image ? (
              <AvatarImage
                src={details.image}
                alt={`Portrait of ${id}`}
                className="object-cover"
              />
            ) : (
              <AvatarImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Default portrait"
                className="object-cover"
              />
            )}
            <AvatarFallback>
              {id?.split("-").map(word => word[0].toUpperCase()).join("")}
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-3xl md:text-4xl font-playfair mb-6 md:mb-12 text-center break-words">
            {id?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg w-full">
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
    </div>
  );
};

export default Participant;