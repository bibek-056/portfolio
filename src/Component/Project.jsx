import React from "react";
import "../App.css";

const Project = (props) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 -ml-[25px]">
                <div className='w-4 h-4 flex items-center justify-center rounded-full relative bg-gray-800'>
                    <div className='w-2 h-2 absolute rounded-full bg-white'>
                    </div>
                </div>
                <p className="text-gray-800 font-semibold text-lg w-full ">{props.data.name}</p>
            </div>

            <p className="text-base leading-5"> {props.data.description}</p>
            <a href={props.data.link}
                target="_blank"
                rel="noopener noreferrer">
                <p className="break-all">{props.data.link}</p>
            </a>
        </div>
    )
}

export default Project;