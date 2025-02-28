import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import flowerOrnamentImage from "/images/lm-ornament-flower.png";

interface ParticipantSectionProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const ParticipantSection = ({ title, content, children }: ParticipantSectionProps) => {
  return (
    <Card className="font-merryweather">
      <img src={flowerOrnamentImage} alt="Flower ornamet image" width={26} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{content}</p>
        {children}
      </CardContent>
    </Card>
  );
};
