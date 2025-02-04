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
import { borisDetails } from "../data/participants/boris";
import { marcinDetails } from "../data/participants/marcin";

const basePath = "/wedding";

// Array of landscape placeholder images for other participants
const placeholderImages = [
  `${basePath}/lovable-uploads/placeholder1.png`,
  `${basePath}/lovable-uploads/placeholder2.png`,
  `${basePath}/lovable-uploads/placeholder3.png`,
  `${basePath}/lovable-uploads/placeholder4.png`,
  `${basePath}/lovable-uploads/placeholder5.png`,
];

export const getParticipantDetails = (participantId: string): ParticipantDetails => {
  console.log("Getting details for participant:", participantId);

  // Get a random image from the array
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

  switch (participantId) {
    case "ira":
      return iraDetails;
    case "nastya":
      return nastyaDetails;
    case "marie":
      return marieDetails;
    case "yongtao":
      return yongtaoDetails;
    case "dima":
      return dimaDetails;
    case "jennie":
      return jennieDetails;
    case "janne":
      return janneDetails;
    case "carin":
      return carinDetails;
    case "couple":
      return {
        ...coupleDetails,
        image: `${basePath}/lovable-uploads/6c4951a7-37e2-45c0-ae57-f21e72e85c34.png`,
      };
    case "lena":
      return lenaDetails;
    case "alexander":
      return { ...alexanderDetails, image: randomImage };
    case "boris":
      return borisDetails;
    case "marcin":
      return { ...marcinDetails, image: randomImage };
    default:
      return {
        title: "Wedding Participant",
        role: "Wedding Participant",
        description: "Details coming soon!",
        image: randomImage,
        contact: null,
      };
  }
};
