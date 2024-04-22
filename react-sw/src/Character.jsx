
import {useEffect, useState} from "react";

function Character(props) {
    const [character, setCharacter] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

const fetchCharacter = () => {
        if (!props.id) {
            setError('Failed to load - no id');
            return;
        }
    setIsLoading(true)
    fetch(`https://swapi.tech/api/people/${props.id}/?format=json`)
        .then((res) =>{(res.json())
            .then((data) => {
                //структура запроса
                console.log(data.result);
                setCharacter(data.result.properties);
                setError(null);
            })
            .catch((error) => {
                setError('There is no character with id ' + props.id)
                console.error(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
        })
}

    useEffect(
        fetchCharacter,
        [props.id]
    );

    if (isLoading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            {props.id} My id
            <p>
                I am character. My name: {character.name}, height: {character.height}, weight: {character.mass},
            </p>
        </div>
    )
}

export {Character}
