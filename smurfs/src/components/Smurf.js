import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            name: {props.data.name}
            Age: {props.data.age}
            Height: {props.data.height}
        </div>
    )
}

export default Smurf