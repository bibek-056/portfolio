import React, { useState } from "react";
import Cardexp from "./Cardexp";

const Experience = (props) => {

    const [ card, setCard ] = useState(null)

    const showCard = (id) => {
        if(id) {
            setCard(id)
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 -ml-[25px]">
                <div className='w-4 h-4 flex items-center justify-center rounded-full relative bg-gray-800'>
                    <div className='w-2 h-2 absolute rounded-full bg-white'>
                    </div>
                </div>
                <p className="text-gray-800 font-semibold text-lg">{props.data.post}</p>
            </div>
            <div className="text-sm leading-3 relative" >
                    <span onMouseEnter={() => showCard(props.data.id)} onMouseLeave={() => setCard(null)}>{props.data.name}</span> / {props.data.city} / {props.data.startDate} - {props.data.endDate}
                {card && 
                 <div className="absolute z-50">
                    <Cardexp open={card}/>
                </div>}
            </div>
            <p className="text-base leading-5"> {props.data.description}</p>
        </div>
    )
}

export default Experience;