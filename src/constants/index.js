const tickets = [
  {
    id: 1,
    name: "Standard",
    price: 7.9,
  },
  {
    id: 2,
    name: "Concession",
    price: 5.4,
  },
];
const extras = [
  {
    id: 1,
    name: "Real3D",
    price: 0.9,
    value: 1,
    label: "Real3D",
  },
  {
    id: 2,
    name: "IMAX",
    price: 1.5,
    value: 2,
    label: "IMAX",
  },
];

//Ticket offer applied per ticket
const ticketOffer = [
  {
    id: 1,
    name: "Three for one",
    days: [3], //Days 1-6 => Mon-Sat, 0 => Sun
    type: 1,
    amount: 2,
  },
  {
    id: 2,
    name: "3$ discount per Ticket",
    days: [3], //Days 1-6 => Mon-Sat, 0 => Sun
    type: 2,
    amount: 3,
  },
];

//Global offer applied to total bill
const globalOffer = [
  {
    id: 1,
    name: "3$ total discount",
    days: [3], //Days 1-6 => Mon-Sat, 0 => Sun
    type: 1,
    amount: 2,
  },
];

export { tickets, extras, ticketOffer, globalOffer };
