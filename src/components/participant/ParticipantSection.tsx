import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LanguagesSection } from "./LanguagesSection";
import { PersonLanguages } from "@/types/participant";

interface ParticipantSectionProps {
  title: string;
  content: string;
  children?: React.ReactNode;
  languages?: PersonLanguages[];
}

export const ParticipantSection = ({ title, content, children, languages }: ParticipantSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{content}</p>
        {languages && <LanguagesSection languages={languages} />}
        {children}
      </CardContent>
    </Card>
  );
};