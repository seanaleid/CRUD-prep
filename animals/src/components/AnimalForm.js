import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const initialAnimal = {
    name: '',
    sound: '',
    classification: { species:'' }
}

export default function AnimalForm({animals, updateAnimals, update}) {
    // console.log(`AnimalForm.js`, props);

    const [ updating, setUpdating ] = useState(false);
    const [animalToUpdate, setAnimalToUpdate] = useState(initialAnimal);

    const editAnimal = animal => {
        setUpdating(true);
        setAnimalToUpdate(animal);
    }

    const saveUpdate = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`animals/${animalToUpdate.id}`, animalToUpdate)
            .then(res => {
                console.log(res.data);
                // let newAnimals = animals.filter(newAnimal => {
                //     if(newAnimal.id === res.data.id){
                //         return animalToUpdate
                //     } else {
                //         return newAnimal
                //     }
                // })
                updateAnimals(animals);
                update(true);
                setUpdating(false);
            })
            .catch(err => console.log(err.response))
    }

    const deleteAnimal = animal => {
        axiosWithAuth()
            .delete(`animals/${animalToUpdate.id}`, animalToUpdate)
            .then(res => {
                console.log(res);
                updateAnimals(animals.filter(item => item.id !== animal.id));
                updating(false);
            })
            .catch(err => console.log(err.response))

    }

    return (
        <div>
            <h1>Hello from the AnimalForm.js file!</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal.name} onClick={() => editAnimal(animal)}>
                        <span>
                            <span onClick={e => {
                                    e.stopPropagation();
                                    deleteAnimal(animal)
                                }
                            }>
                                X
                            </span>{" "}
                            {animal.name}
                        </span>
                    </li>
                ))}
            </ul>
            { updating && (
                <form onSubmit={saveUpdate}>
                    <legend>Update Animal</legend>
                    <label>
                        Name:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, name: e.target.value })
                            }
                            value={animalToUpdate.name}
                        />
                    </label>
                    <label>
                        Sound:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, sound: e.target.value })
                            }
                            value={animalToUpdate.sound}
                        />
                    </label>
                    <label>
                        Classification:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ 
                                    ...animalToUpdate, 
                                    classification: { species: e.target.value }
                                })
                            }
                            value={animalToUpdate.classification.species}
                        />
                    </label>
                    <div>
                        <button type="submit">Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}