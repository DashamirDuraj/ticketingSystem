import { useState } from "react";
import DatePicker from "react-datepicker";
import SelectTickets from "../SelectTickets/SelectTickets";
import Billing from "../Billing/Billing";
import "./styles.css";

const Checkout = () => {
  const [date, setDate] = useState(new Date());
  const [selectTickets, setSelectedTickets] = useState({});
  const [checkout, setCheckout] = useState(false);

  const day = date.getDay();

  const handleChange = (type, value, ticket) => {
    setCheckout(false);

    setSelectedTickets({
      ...selectTickets,
      [ticket.name]: {
        ...selectTickets[ticket.name],
        ...ticket,
        [type]: typeof value === "string" ? Number(value) : value,
      },
    });
  };

  return (
    <div className="main-container">
      <div className="select-ticketContainer">
        <div>
          <p>Date:</p>
          <DatePicker
            selected={date}
            onChange={(date) => {
              setCheckout(false);
              setDate(date);
            }}
          />
        </div>

        <SelectTickets
          selectedTickets={selectTickets}
          handleChange={(type, value, ticket) =>
            handleChange(type, value, ticket)
          }
        />

        {Object.keys(selectTickets).length > 0 && (
          <div
            className="checkout-button"
            onClick={() => setCheckout(!checkout)}
          >
            Checkout
          </div>
        )}
      </div>
      {checkout && <Billing selectedTickes={selectTickets} day={day} />}
    </div>
  );
};

export default Checkout;
