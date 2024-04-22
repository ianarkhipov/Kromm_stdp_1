
import {useEffect, useState} from "react";

function Character(props) {
    const [character, setCharacter] = useState({})

const fetchCharacter = () => {
    fetch(`https://swapi.tech/api/people/${props.id}/?format=json`)
        .then((res) =>{(res.json())
            .then((data) => {
                //структура запроса
                console.log(data.result);
                setCharacter(data.result.properties);
            })
        })
}

    useEffect(
        fetchCharacter,
        [props.id]
    );

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
