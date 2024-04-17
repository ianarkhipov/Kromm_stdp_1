import {A} from "./my-file"

function Character(props) {
    return (
        <div>
            <p>
                My name: {props.name}.
            </p>
            <p>

            </p>
            Count from parent:{props.x}
        </div>
    )
}

export {Character}
