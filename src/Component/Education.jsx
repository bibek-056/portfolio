import React, { useState } from "react";
import Cardedu from "./Cardedu";
import Moment from "react-moment";

const Education = (props) => {
  const [card, setCard] = useState(null);

  const showCard = (id) => {
    if (id) {
      setCard(id);
    } else {
      setCard(null);
    }
  };

  return (
    <div className="text-white flex flex-col">
      <p className="font-semibold text-xl">{props.data.degree}</p>
      <div className="text-sm leading-5 relative z-1">
        {" "}
        <span
          onMouseEnter={() => showCard(props.data.id)}
          onMouseLeave={() => setCard(null)}
        >
          {props.data.name}
        </span>{" "}
        / {props.data.address} /{" "}
        <Moment format="YYYY/MM/DD">{props.data.startDate}</Moment> -{" "}
        {props.data.endDate ? (
          <Moment format="YYYY/MM/DD">{props.data.endDate}</Moment>
        ) : (
          <p>Present</p>
        )}
        {card && (
          <div className="absolute z-50">
            <Cardedu open={card} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
