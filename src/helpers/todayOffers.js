import { ticketOffer, globalOffer } from "../constants";

const todayTicketOffer = (day) =>
  ticketOffer.filter(({ days }) => days.includes(day));

const todayGlobalOffer = (day) =>
  globalOffer.filter(({ days }) => days.includes(day));

export { todayTicketOffer, todayGlobalOffer };
