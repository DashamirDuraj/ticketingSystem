import { todayTicketOffer } from "./todayOffers";

const applyOfferToTicket = (selectedTickets, day) => {
  const ticketOffer = todayTicketOffer(day);

  return Object.keys(selectedTickets).map((keyName, i) => {
    const { price, quantity, ticketExtras } = selectedTickets[keyName];

    const totalTicketExtras = ticketExtras
      ? ticketExtras.reduce(
          (acc, currVal) => acc + currVal.price * currVal.quantity,
          0
        )
      : 0;

    const ticketPrice = quantity * price + totalTicketExtras;

    let finalTicketPrice = ticketPrice;
    let freeTickets = 0;
    let freeTicketsPrice = 0;
    let savedFromOffers = 0;

    ticketOffer.map(({ type, amount }) => {
      if (type === 1) {
        freeTickets = quantity * amount;
        freeTicketsPrice = freeTickets * price;
      }

      if (type === 2) {
        finalTicketPrice = ticketPrice - quantity * amount;
      }
      savedFromOffers = ticketPrice - finalTicketPrice + freeTicketsPrice;
    });

    return {
      ...selectedTickets[keyName],
      finalTicketPrice: Number(finalTicketPrice.toFixed(2)),
      freeTickets,
      savedFromOffers: Number(savedFromOffers.toFixed(2)),
    };
  });
};

export { applyOfferToTicket };
