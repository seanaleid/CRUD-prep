import React, { useState, useEffect } from "react";

import AnimalForm from "./AnimalForm.js";
import AnimalCard from "./AnimalCard.js";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export default function AnimalList() {

    const [ animals, setAnimals ] = useState();

    useEffect(() => {
        axiosWithAuth()
            .get('animals')
            .then(res => console.log(res.data))
            .catch(err => console.log(`There was an error fetching the animals! Please try again.`, err.response ))
    })

    return (
        <div>
            <h1>Hello from the AnimalList.js file!</h1>
            <AnimalForm />
            <AnimalCard />
        </div>
    )
}