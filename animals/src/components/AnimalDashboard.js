import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
            .get('animals')
            .then(res => {
                console.log(res.data)
                setAnimals(res.data)
            })
            .catch(err => console.log(`There was an error fetching the animals! Please try again.`, err.response ))
    }, [])

    return(
        <div>
            <h1>Hello from the AnimalDashboard.js file!</h1>
            <AnimalForm animals={animals} updateAnimals={setAnimals} />
            <AnimalList animals={animals} />
        </div>
    )
}