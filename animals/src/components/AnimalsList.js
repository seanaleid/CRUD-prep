import React from "react";

import AnimalForm from "./AnimalForm.js";
import AnimalCard from "./AnimalCard.js";

export function AnimalList() {
    return (
        <div>
            <h1>Hello from the AnimalList.js file!</h1>
            <AnimalForm />
            <AnimalCard />
        </div>
    )
}