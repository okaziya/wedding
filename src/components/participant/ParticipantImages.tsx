import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ParticipantImagesProps {
  images?: string[];
  image?: string;
  title: string;
}

export const ParticipantImages = ({ images, image, title }: ParticipantImagesProps) => {
  if (images) {
    return (
      <div className="w-full max-w-[720px] space-y-4">
        {images.map((img, index) => (
          <AspectRatio key={index} ratio={4 / 3} className="overflow-hidden rounded-lg bg-muted">
            <img src={img} alt={`${title} - photo ${index + 1}`} className="object-cover w-full h-full" />
          </AspectRatio>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[720px] py-6">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full border-[5px] border-solid border-white rounded-[2px]"
        />
      </AspectRatio>
    </div>
  );
};
