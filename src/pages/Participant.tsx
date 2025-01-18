import { useParams } from "react-router-dom";

const Participant = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen pt-16 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair mb-6 md:mb-12 text-center break-words">
          {id?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
          <p className="text-center text-base md:text-lg">Participant details coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Participant;