import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ParticipantSectionProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const ParticipantSection = ({ title, content, children }: ParticipantSectionProps) => {
  return (
    <Card>
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