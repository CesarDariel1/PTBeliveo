import React from 'react';


export const Task = props => (
    <tr key={props.task.title}>
        <td className="text-center">{props.task.title}</td>
        <td className="text-center">
            <input
                type="checkbox"
                checked={props.task.done}
                onChange={() => props.toggleTask(props.task)} 
            />
        </td>
    </tr>
);