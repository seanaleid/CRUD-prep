import React from "react";

import AnimalCard from "./AnimalCard.js";


export default function AnimalList({animals}) {

    return (
        <div>
            <h1>Hello from the AnimalList.js file!</h1>
            
            {animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
            ))}
        </div>
    )
}