import { useParams } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Participant = () => {
  const { id } = useParams();
  
  const getParticipantDetails = (participantId: string) => {
    console.log("Getting details for participant:", participantId);
    
    // Array of landscape placeholder images
    const placeholderImages = [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    ];

    // Get a random image from the array
    const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
    
    if (participantId === "ira") {
      return {
        role: "Mother of the Bride",
        description: "Ira is the bride's mother and plays a special role in this celebration.",
        image: randomImage
      };
    }
    return {
      role: "Wedding Participant",
      description: "Details coming soon!",
      image: randomImage
    };
  };

  const details = id ? getParticipantDetails(id) : null;
  
  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl">
            <AspectRatio ratio={3/2} className="bg-muted">
              <img
                src={details?.image}
                alt={`Portrait of ${id}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          
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