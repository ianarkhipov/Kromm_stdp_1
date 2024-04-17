import {A} from "./my-file"
import {useEffect, useState} from "react";

function Character(props) {
    const [character, setCharacter] = useState({})

const fetchCharacter = () => {
    fetch(`https://swapi.dev/api/people/${props.id}/?format=json`)
        .then((res) =>{(res.json())
            .then(character=>{
                console.log(character)
                setCharacter(character)
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
