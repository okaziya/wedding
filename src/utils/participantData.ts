import { ParticipantDetails } from "../types/participant";
import { iraDetails } from "../data/participants/ira";
import { nastyaDetails } from "../data/participants/nastya";
import { marieDetails } from "../data/participants/marie";
import { yongtaoDetails } from "../data/participants/yongtao";
import { dimaDetails } from "../data/participants/dima";
import { jennieDetails } from "../data/participants/jennie";
import { janneDetails } from "../data/participants/janne";
import { carinDetails } from "../data/participants/carin";
import { coupleDetails } from "../data/participants/couple";
import { lenaDetails } from "../data/participants/lena";
import { alexanderDetails } from "../data/participants/alexander";

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
      return marieDetails;
    case "yongtao":
      return yongtaoDetails;
    case "dima":
      return { ...dimaDetails, image: randomImage };
    case "jennie":
      return { 
        ...jennieDetails, 
        image: `${basePath}/lovable-uploads/887c36d2-c067-4711-8d15-5e08d37c7020.png` 
      };
    case "janne":
      return { 
        ...janneDetails, 
        image: `${basePath}/lovable-uploads/00e4c80d-232a-46e2-92eb-1613b2f32956.png` 
      };
    case "carin":
      return { 
        ...carinDetails, 
        image: `${basePath}/lovable-uploads/732531e8-64f2-4f07-848d-43605481ac87.png` 
      };
    case "couple":
      return { 
        ...coupleDetails, 
        image: `${basePath}/lovable-uploads/6c4951a7-37e2-45c0-ae57-f21e72e85c34.png` 
      };
    case "lena":
      return { ...lenaDetails, image: randomImage };
    case "alexander":
      return { ...alexanderDetails, image: randomImage };
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