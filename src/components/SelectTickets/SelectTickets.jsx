import { useState } from "react";
import { tickets, extras } from "../../constants";
import Select from "react-select";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const SelectTickets = ({ handleChange, selectedTickets }) => {
  const [selectedExtraQuantity, setSelectedExtraQuantity] = useState({});

  return (
    <div>
      {tickets.map((ticket, index) => {
        const { name } = ticket;
        return (
          <div key={index} className="ticket-container">
            <span className="ticketName">Ticket type: {name}</span>

            <div>
              <span>Quantity: </span>
              <input
                className="quantity"
                type="number"
                min="0"
                defaultValue="0"
                onChange={(e) =>
                  handleChange("quantity", e.target.value, ticket)
                }
              />
            </div>

            <label>Select Extras:</label>

            <Select
              isDisabled={
                !selectedTickets[ticket.name] ||
                selectedTickets[ticket.name]?.quantity < 1
              }
              isMulti
              options={extras}
              onChange={(selected) => {
                setSelectedExtraQuantity({
                  ...selectedExtraQuantity,
                  [ticket.id]: selected,
                });
              }}
            />
            <div className="extras-quantityContainer">
              {selectedExtraQuantity[ticket.id] &&
                selectedExtraQuantity[ticket.id].map(({ name }, i) => {
                  return (
                    <div key={i} className="extra-quantity">
                      <span>{name} Quantity: </span>
                      <input
                        className="quantity"
                        type="number"
                        min="0"
                        defaultValue="0"
                        onChange={(e) => {
                          let cloneSelectedExtraQuantity = selectedExtraQuantity;

                          cloneSelectedExtraQuantity[ticket.id][i] = {
                            ...cloneSelectedExtraQuantity[ticket.id][i],
                            quantity: Number(e.target.value),
                          };

                          setSelectedExtraQuantity(cloneSelectedExtraQuantity);

                          handleChange(
                            "ticketExtras",
                            cloneSelectedExtraQuantity[ticket.id],
                            ticket
                          );
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectTickets;
