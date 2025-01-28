import { useParams, Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Participant = () => {
  const { id } = useParams();
  
  const getParticipantDetails = (participantId: string) => {
    console.log("Getting details for participant:", participantId);
    
    // Array of landscape placeholder images for other participants
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
        presentation: "Ira is the mother of Liza and live in Irkutsk. She likes to do business and travel around Asia.",
        welcomeMessage: "Ira, we are so happy that you go through all the visa hassle to attend our ceremony. We hope you will get a better idea about how we relate to each other as a couple and why we make Sweden our home for the future.",
        travelPlans: "You are believed to arrive early in the week before the ceremony around June 10th. We will arrange for transportation from Stockholm to Siljansnäs in conjunction with our own travel schedule. Please think about how long you will stay and let us know about duration of your stay and intended activities after the ceremony.",
        accommodation: "During the ceremony event weekend, you will stay in cottage 109 at Siljansnäs Stugby, see map under \"Maps\" page.",
        packingList: "Todo @Mats, fill out!",
        image: randomImage
      };
    } else if (participantId === "nastya") {
      const basePath = import.meta.env.PROD ? '/wedding' : '';
      return {
        role: "Sister of the Bride & Her Beautiful Family",
        presentation: "Welcome, Nastya and Family!\n\nWe are so thrilled to welcome my dear sister Nastya, her husband Kostya, and their wonderful children Vika and Sema to our wedding!\n\nNastya and I share the same father but have different mothers, and though we didn't grow up in the same household, her presence in my adult life has been truly transformative. Nastya has inspired me in countless ways, particularly through the beautiful family she and Kostya have built together since their youth. Their love and commitment, raising their teenage daughter Vika and their lively 9-year-old son Sema, are a testament to the strength of their bond.\n\nNot only has Nastya had a profound impact on my personal life, but she's also been a positive influence on so many others. As a professional nutritionist with years of experience, she's dedicated to promoting a healthy and balanced lifestyle. Because of her guidance and expertise, I feel confident that my own family will enjoy nutritious and wholesome food, grow stronger, and live happier lives. For that, Nastya, we are endlessly grateful.\n\nNastya, Kostya, Vika, and Sema, we can't wait to see you in person and celebrate this special day together. Your presence will make this occasion even more joyful and meaningful for us all.\n\nThank you for being a part of our lives and for inspiring us in so many ways. Welcome to the celebration—let's make unforgettable memories together!",
        welcomeMessage: "Nastya, Kostya, X, and Y; thank you for crossing the Baltic Sea for us! We look forward to see you and show you around one of our favorite places in Sweden. Hopefully, this will be the first of many visits in the future.",
        travelPlans: "We believe you will arrive by ship to Stockholm, rent a car, and drive to arrive in Siljansnäs by the reception at 17:00 on Friday June 13th. Please think about how long you will stay around and let us know about intended schedule after the ceremony weekend.",
        accommodation: "During the ceremony event weekend, your family will stay in cottage 108 at Siljansnäs Stugby, see map under \"Maps\" page.",
        packingList: "Todo @Mats, fill out!",
        images: [
          `${basePath}/lovable-uploads/d43340f3-e06c-4c82-b56a-26d9efe47658.png`,
          `${basePath}/lovable-uploads/99dfa8d4-a4b4-4bf9-b893-1141b73139ba.png`
        ],
        image: `${basePath}/lovable-uploads/99dfa8d4-a4b4-4bf9-b893-1141b73139ba.png` // Default image for single image display
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
          {details?.images ? (
            <div className="w-full max-w-2xl space-y-4">
              {details.images.map((img, index) => (
                <AspectRatio key={index} ratio={3/2} className="bg-muted">
                  <img
                    src={img}
                    alt="family photo of Nastya, Kostya, Vika, and Sema"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              ))}
            </div>
          ) : (
            <div className="w-full max-w-2xl">
              <AspectRatio ratio={3/2} className="bg-muted">
                <img
                  src={details?.image}
                  alt={`Portrait of ${id}`}
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-playfair mb-6 md:mb-12 text-center break-words">
            {id?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </h1>
          
          <div className="space-y-6 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{details?.role}</p>
              </CardContent>
            </Card>

            {details?.presentation && (
              <Card>
                <CardHeader>
                  <CardTitle>Presentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line">{details.presentation}</p>
                </CardContent>
              </Card>
            )}

            {details?.welcomeMessage && (
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{details.welcomeMessage}</p>
                </CardContent>
              </Card>
            )}

            {details?.travelPlans && (
              <Card>
                <CardHeader>
                  <CardTitle>Expected Travel Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{details.travelPlans}</p>
                </CardContent>
              </Card>
            )}

            {details?.accommodation && (
              <Card>
                <CardHeader>
                  <CardTitle>Accommodation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{details.accommodation}</p>
                  <Link to="/maps" className="text-blue-600 hover:underline mt-2 inline-block">
                    View Maps
                  </Link>
                </CardContent>
              </Card>
            )}

            {details?.packingList && (
              <Card>
                <CardHeader>
                  <CardTitle>Packing List Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{details.packingList}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;