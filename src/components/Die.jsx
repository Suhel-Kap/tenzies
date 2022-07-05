import React from "react";

export default function Die(props) {
    return (
        <div className="drop-shadow-lg w-12 h-12 bg-neutral-100 rounded-md text-custom-dark-blue-600 font-bold p-3.5 cursor-pointer text-xl flex items-center justify-center">
            <h2>{props.value}</h2>
        </div>
    );
}
