import React, { useState } from 'react';

export const TaskCreate = props => {

    const [newTask, setNewTask] = useState('');

    const TaskValue = e => setNewTask(e.target.value);
    
    const TaskCreate = () => {
        if(newTask === ''){
            alert('Favor de ingresar un nombre a la tarea')
        }else{
        props.taskCreate(newTask);
        setNewTask('');
        }
    }

    return (
        <div className="mt-4">
            <h4>
                To Do List
            </h4>
            <form>
            <input 
                type="text"
                placeholder="Task name"
                className="form-control"
                value={newTask}
                onChange={TaskValue}
            />
            <button className="btn btn-primary mt-2 mb-2" onClick={TaskCreate}>
                Add 
            </button>
            </form>
        </div>
    )
}