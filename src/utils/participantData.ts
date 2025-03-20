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
import { oscarDetails } from "../data/participants/oscar.ts";

export const getParticipantDetails = (participantId: string): ParticipantDetails => {
  console.log("Getting details for participant:", participantId);

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
    case "oscar":
      return oscarDetails;
    case "janne":
      return janneDetails;
    case "carin":
      return carinDetails;
    case "couple":
      return coupleDetails;
    case "lena":
      return lenaDetails;
    case "alexander":
      return alexanderDetails;
    case "boris":
      return borisDetails;
    case "marcin":
      return marcinDetails;
    default:
      return {
        title: "Not Found",
        role: "404",
        description: "Details unavailable, check the page name!",
        languages: "N/A",
        contactName: "WhatsApp via Mats",
        contactNumber: "+46 730 567 567",
      };
  }
};
