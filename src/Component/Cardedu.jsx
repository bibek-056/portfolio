import logotu from "../Assets/logo_TU.png"
import soslogo from "../Assets/soslogo.png"

const Cardedu = (props) => {

    const cardData = [
        {
            id: 1,
            name: "Pashchimanchal Campus",
            image: logotu,
            about: "The Pashchimanchal Campus (Western Region Campus ) is a constituent campus of Tribhuvan University, under Institute of Engineering. It was established in 2038 BS as a pioneer technical institution in western region from the Government sector."
        },
        {
            id: 2,
            name: "SOS Hermann Gmeiner School Gandaki",
            image: soslogo,
            about: "SOS Hermann Gmeiner School Gandaki is a prestigious private educational institution located in Pokhara-15, Rambazar, Kaski, Gandaki Province, Nepal. It was established in 1982 as a response to the devastating landslide that occurred in Kaski and Syangja districts of Nepal in 1980."
        }
    ]
    return (
        <div className="flex gap-4 h-fit w-full border border-gray-400 bg-white shadow-2xl p-4 z-10 rounded-md">
            <div className="w-1/4 h-full">
                <img src={cardData[props.open - 1]?.image} alt="image"/>
            </div>
            <div className=" w-3/4 h-full">
                <p className="text-sm leading-4 font-normal text-black">{cardData[props.open - 1 ]?.about}</p>
            </div>
        </div>
    )
}

export default Cardedu;