import React from "react";

export default function Button(props) {
    return (
        <button
            onClick={props.handleClick}
            className="bg-blue-500 text-neutral-100 w-32 h-16 drop-shadow-lg rounded-lg text-xl cursor-pointer hover:bg-blue-700"
        >
            <h2 className="font-bold tracking-wider">Roll</h2>
        </button>
    );
}
