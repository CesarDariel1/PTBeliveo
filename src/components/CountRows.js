import React from 'react';

export const CountRows = props => (
    props.taskData.filter(t => !t.done).length === 0 ?
        <tr>
            <td colSpan="5" className="text-center">List is empty</td>
        </tr>
        : null
)

export const CountRowsDone = props => (
    props.taskData.filter(t => t.done).length === 0 ?
        <tr>
            <td colSpan="5" className="text-center">List is empty</td>
        </tr>
        : null
)