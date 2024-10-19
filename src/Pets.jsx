import { useEffect } from "react";
import { useState } from "react";
import Pet from "./Pet";

const Pets = () => {
    const [Pets, setPets] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => setPets(data.pets))
    }, []);

    return (
        <div style={{
            width: '85%',
            margin: '0 auto'
        }}>
            <h3>Pets: {Pets.length}</h3>
            {
                Pets.map(pet => <Pet pet={pet}></Pet>)
            }
        </div>
    );
};

export default Pets;