
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ParticipantImagesProps {
  images?: string[];
  image?: string;
  title: string;
}

export const ParticipantImages = ({ images, image, title }: ParticipantImagesProps) => {
  const imageClasses = cn(
    "object-cover w-full h-full",
    "shadow-[0px_6px_32px_rgba(48,40,24,0.15)]",
    "border-[5px] border-solid border-white rounded-[2px]",
    "bg-transparent"
  );

  if (images) {
    return (
      <div className="w-full max-w-[720px] space-y-4">
        {images.map((img, index) => (
          <AspectRatio key={index} ratio={4 / 3} className="overflow-hidden rounded-lg">
            <div className="w-full h-full">
              <div className="w-full h-full transform -rotate-1">
                <img 
                  src={img} 
                  alt={`${title} - photo ${index + 1}`} 
                  className={imageClasses}
                  style={{ boxShadow: "0px 6px 32px rgba(48,40,24,0.15)" }}
                />
              </div>
            </div>
          </AspectRatio>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[720px] py-6">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
        <div className="w-full h-full">
          <div className="w-full h-full transform -rotate-1">
            <img
              src={image}
              alt={title}
              className={imageClasses}
              style={{ boxShadow: "0px 6px 32px rgba(48,40,24,0.15)" }}
            />
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};
