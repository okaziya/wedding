export interface LanguageInfo {
  language: string;
  level: string;
}

export interface PersonLanguages {
  name: string;
  languages: LanguageInfo[];
}

export interface ParticipantDetails {
  title: string;
  role: string;
  description: string;
  welcomeMessage?: string;
  travelPlans?: string;
  accommodation?: string;
  packingList?: string;
  images?: string[];
  image?: string;
  contact?: string;
  languages?: PersonLanguages[];
}