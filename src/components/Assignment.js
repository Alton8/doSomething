import React from 'react';
import './Assignment.css';
import { useState } from 'react';
function Assignment() {
    
    const[name, setName] = useState("");
    const[task, setTask] = useState("");

    const handleClick = (taskName) => {
        setTask(taskName)
    }
    return (

        <div>
        <h1>Add Assignment</h1>

        <p> Assignment Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>What's the smallest step you can take right now?</p>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <p>or pick a common first prompt</p>
        
        <button onClick={() => handleClick("read the prompt")}>read the prompt</button> 
        <button onClick={() => handleClick("open the rubric")}>open the rubric</button>
        <button onClick={() => handleClick("set up the doc")}>set up the doc</button>
        <button onClick={() => handleClick("find an example")}>find one example</button>
        
        <div>
        <button className = "save">Save Assignment</button>

        </div>
        </div>

    )

} 
export default Assignment;