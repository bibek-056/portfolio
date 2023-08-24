import React, {useState} from "react";
import Cardedu from "./Cardedu";

const Education = (props) => {

    const [ card, setCard ] = useState(null)

    const showCard = (id) => {
        if(id) {
            setCard(id)
        } else {
            setCard(null)
        }
    }

    return (
        <div className="text-white flex flex-col">
            <p className="font-semibold text-xl">{props.data.course}</p>
            <div className="text-sm leading-3 relative z-1"> <span onMouseEnter={() => showCard(props.data.id)} onMouseLeave={() => setCard(null)}>{props.data.name}</span> / {props.data.city} / {props.data.startDate} - {props.data.endDate} 
                {card && 
                 <div className="absolute z-50">
                    <Cardedu open={card}/>
                </div>}
            </div>
        </div>
    )
}

export default Education;