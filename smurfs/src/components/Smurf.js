import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            name: {props.data.name}
            Age: {props.data.age}
            Height: {props.data.height}
            <br/>
            <button onClick={(event)=>{props.handlerDelete(event,props.data.id)}}>Delete</button>
        </div>
    )
}

export default Smurf