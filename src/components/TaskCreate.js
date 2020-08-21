import React, { useState } from 'react';

export const TaskCreate = props => {

    let newDate = new Date();
    let today = newDate.getFullYear() + "-" + parseInt(newDate.getMonth() + 1) + "-" + newDate.getDate();

    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [StartDate, newStartDate] = useState(today);
    const [deadline, setDeadline] = useState('');

    const TaskValue = e => setNewTask(e.target.value);
    const TaskDescription = e => setNewDescription(e.target.value);
    const TaskDeadline = e => setDeadline(e.target.value);

    const TaskCreate = e => {
        if (newTask === '') {
            alert('You need to write a name on the field Task Name')
        } else {
            props.taskCreate(newTask, newDescription, StartDate, deadline);
            setNewTask('');
            setNewDescription('');
            setDeadline('');
        }
        e.preventDefault();
    }

    return (
        <div className="mt-4">
            <h4>
                To Do List
            </h4>
            <input
                type="text"
                placeholder="Task name"
                className="form-control"
                value={newTask}
                onChange={TaskValue}
            />
            <textarea
                placeholder="Description..."
                className="form-control mt-2"
                value={newDescription}
                onChange={TaskDescription}>
            </textarea>
            <label className="mt-2">
                Deadline
            </label>
            <input 
                type="date"
                className="form-control"
                style={{width: 250}}
                value={deadline}
                onChange={TaskDeadline}
            />
            <button className="btn btn-primary mt-2 mb-2" onClick={TaskCreate}>
                Save
            </button>
        </div>
    )
}