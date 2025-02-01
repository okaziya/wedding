import { PersonLanguages } from "@/types/participant";

interface LanguagesSectionProps {
  languages: PersonLanguages[];
}

export const LanguagesSection = ({ languages }: LanguagesSectionProps) => {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Family Languages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map((person) => (
          <div key={person.name} className="bg-wedding-primary/20 rounded-lg p-4">
            <h4 className="font-playfair text-lg mb-2">{person.name}</h4>
            <ul className="space-y-2">
              {person.languages.map((lang, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm bg-wedding-accent/20 px-2 py-1 rounded">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};