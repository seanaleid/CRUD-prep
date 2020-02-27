import React from "react";

export default function AnimalCard({animal}) {
    // console.log(props) first and then destructure 
    // console.log(props);

    const { name, sound, classification } = animal;
    const { species } = classification;

    return (
        <div>
            <h1>This is the {name} card! {sound}</h1>
            <h2>{name}</h2>
            <h2>{species}</h2>
        </div>
    )
}