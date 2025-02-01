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
  contact?: string | null;
}
