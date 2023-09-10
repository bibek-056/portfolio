import React, { useState } from "react";
import Cardexp from "./Cardexp";
import Moment from "react-moment";

const Experience = (props) => {
  const [card, setCard] = useState(null);

  const showCard = (id) => {
    if (id) {
      setCard(id);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 -ml-[25px]">
        <div className="w-4 h-4 flex items-center justify-center rounded-full relative bg-gray-800">
          <div className="w-2 h-2 absolute rounded-full bg-white"></div>
        </div>
        <p className="text-gray-800 font-semibold text-lg">
          {props.data.position}
        </p>
      </div>
      <div className="text-sm leading-3 relative">
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
            <Cardexp open={card} />
          </div>
        )}
      </div>
      <p className="text-base leading-5"> {props.data.tech}</p>
    </div>
  );
};

export default Experience;
