import React from 'react';

const Task = (props) =>{

    let doneText = props.done?"Done":"To Do";
    

    return (
    
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="info">{props.description}</p>
            <p >{doneText}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>

    )
}

export default Task;