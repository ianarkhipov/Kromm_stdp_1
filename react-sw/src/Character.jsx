
import {useEffect, useState} from "react";

function Character(props) {
    const [character, setCharacter] = useState({})
    const [error, setError] = useState(null)

const fetchCharacter = () => {
        if (!props.id) {
            setError('Failed to fetch');
            return;
        }

    fetch(`https://swapi.tech/api/people/${props.id}/?format=json`)
        .then((res) =>{(res.json())
            .then((data) => {
                //структура запроса
                console.log(data.result);
                setCharacter(data.result.properties);
                setError(null);
            })
            .catch((error) => {
                setError('There is no such a character')
                console.error(error)
            });
        })
}

    useEffect(
        fetchCharacter,
        [props.id]
    );

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <p>
                I am character. My name: {character.name}, height: {character.height}, weight: {character.mass},
                birth year: {character.birth_year}
            </p>
        </div>
    )
}

export {Character}
