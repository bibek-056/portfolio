import inspire from "../Assets/inspire.png"
import intopros from "../Assets/intopros.png"

const Cardexp = (props) => {

    const cardData = [
        {
            id: 1,
            name: "Inspire Nepal, UVIC",
            image: inspire,
            about: "INSPIRE is a program of research and community-based innovation at the department of computer science, in University of Victoria (UVic, located Victoria, BC, Canada) that engages Engineering and Computer Science students with the help of mentors from industry."
        },
        {
            id: 2,
            name: "Intopros Technologies",
            image: intopros,
            about: "Intopros Technologies is working in the field of software development and IT services since Jan, 2019. We are a group of professionals with vivid experience who are passionate about delivering high quality software and services on promised time at affordable prices."
        }
    ]
    return (
        <div className="flex gap-4 h-40 w-4/5 border border-gray-400 bg-white shadow-2xl p-4 rounded-md">
            <div className="w-1/4 h-full">
                <img src={cardData[props.open - 1 ]?.image} alt="image"/>
            </div>
            <div className=" w-3/4 h-full">
                <p className="text-sm leading-4 font-normal">{cardData[props.open - 1 ]?.about}</p>
            </div>
        </div>
    )
}

export default Cardexp;