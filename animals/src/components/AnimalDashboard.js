import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    const [ update, setUpdate ] = useState(false);
    
    useEffect(() => {
        axiosWithAuth()
            .get('animals')
            .then(res => {
                console.log(res.data)
                setAnimals(res.data)
                setUpdate(false);
            })
            .catch(err => console.log(`There was an error fetching the animals! Please try again.`, err.response ))
    }, [update])

    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} update={setUpdate} />
            <AnimalList animals={animals} />
        </div>
    )
}