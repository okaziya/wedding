import { ParticipantDetails } from "../types/participant";
import { iraDetails } from "../data/participants/ira";
import { nastyaDetails } from "../data/participants/nastya";
import { marieDetails } from "../data/participants/marie";
import { yongtaoDetails } from "../data/participants/yongtao";

const basePath = '/wedding';

// Array of landscape placeholder images for other participants
const placeholderImages = [
  `${basePath}/lovable-uploads/placeholder1.png`,
  `${basePath}/lovable-uploads/placeholder2.png`,
  `${basePath}/lovable-uploads/placeholder3.png`,
  `${basePath}/lovable-uploads/placeholder4.png`,
  `${basePath}/lovable-uploads/placeholder5.png`
];

export const getParticipantDetails = (participantId: string): ParticipantDetails => {
  console.log("Getting details for participant:", participantId);
  
  // Get a random image from the array
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  
  switch (participantId) {
    case "ira":
      return { ...iraDetails, image: randomImage };
    case "nastya":
      return nastyaDetails;
    case "marie":
      return { ...marieDetails, image: randomImage };
    case "yongtao":
      return { ...yongtaoDetails, image: randomImage };
    default:
      return {
        title: "Wedding Participant",
        role: "Wedding Participant",
        description: "Details coming soon!",
        image: randomImage,
        contact: null
      };
  }
};