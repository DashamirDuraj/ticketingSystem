import { applyOfferToTicket } from "../../helpers/applyOfferToTicket";
import { applyGlobalOffer } from "../../helpers/applyGlobalOffer";
import { todayGlobalOffer, todayTicketOffer } from "../../helpers/todayOffers";

import "./styles.css";

const Billing = ({ selectedTickes, day }) => {
  const tickets = applyOfferToTicket(selectedTickes, day);
  const { total, globalSaving } = applyGlobalOffer(tickets, day);
  const globalOffers = todayGlobalOffer(day);
  const ticketsOffers = todayTicketOffer(day);

  const showAppliedOffers = globalOffers.length > 0 || ticketsOffers.length > 0;
  return (
    <div className="billing-mainContainer">
      {tickets.map((item, index) => (
        <div key={index} className="billing-container">
          <p className="billing-details">*Ticket: {item.name}</p>

          <p className="billing-details">Quantity: {item.quantity}</p>

          <p className="billing-details">Price: ${item.price}</p>
          <p className="billing-details">Free Tickets: {item.freeTickets}</p>

          {item.ticketExtras &&
            item.ticketExtras.map((ext, index) => {
              return (
                <div key={index}>
                  <p className="extras">Extra: {ext.name}</p>
                  <p className="extras">Quantity: {ext.quantity}</p>
                  <p className="extras">Price: ${ext.price}</p>
                </div>
              );
            })}

          <p>Total: ${item.finalTicketPrice}</p>
        </div>
      ))}

      <p className="total-bill">Bill Total: ${total}</p>
      <p>Total saved from offers: ${globalSaving}</p>

      {showAppliedOffers && (
        <div className="display-offersContainer">
          <p>These offers has been applied to your bill:</p>
          {globalOffers.map(({ name }, index) => (
            <p key={index}>{name}</p>
          ))}

          {ticketsOffers.map(({ name }, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Billing;
