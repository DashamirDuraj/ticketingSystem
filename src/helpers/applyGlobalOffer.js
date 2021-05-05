import { globalOffer } from "../constants";
import { todayGlobalOffer } from "./todayOffers";

const applyGlobalOffer = (tickets, day) => {
  const globalOffer = todayGlobalOffer(day);

  const totalTicketsSumm = tickets.reduce(
    (acc, currVal) => acc + currVal.finalTicketPrice,
    0
  );

  let total = totalTicketsSumm;

  globalOffer.map(({ type, amount }) => {
    if (type === 1) {
      total = totalTicketsSumm - amount;
    }
  });

  const totalSavedFromTicketOffers = tickets.reduce(
    (acc, currVal) => acc + currVal.savedFromOffers,
    0
  );

  const globalSaving = totalTicketsSumm - total + totalSavedFromTicketOffers;
  return {
    total: Number(total.toFixed(2)),
    globalSaving: Number(globalSaving.toFixed(2)),
  };
};

export { applyGlobalOffer };
