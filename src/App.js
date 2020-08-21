import React, { useState, useEffect } from 'react';
import './App.css';
import { Task } from './components/Task';
import { TaskCreate } from './components/TaskCreate';
import { CountRows, CountRowsDone } from './components/CountRows';

function App() {

  const [taskData, setTaskData] = useState([])

  const AddNewTask = (newTask, newDescription, today, deadline) => {
    if (!taskData.find(t => t.title === newTask)) {
      setTaskData([...taskData, { title: newTask, description: newDescription, startDate: today, deadline: deadline,done: false }])
    } else {
      alert('You cannot create two tasks with the same name');
    }
  }

  const ToggleTask = task => (
    setTaskData(taskData.map(t => (t.title === task.title ? { ...t, done: !task.done } : t)))
  )

  const PrintOnTable = (doneValue) => (
    taskData
      .filter(task => task.done === doneValue)
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(task => (
        <Task
          key={task.title}
          task={task}
          toggleTask={ToggleTask}
        />
      ))
  )

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskData(JSON.parse(data));
    } else {

    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskData));
  }, [taskData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <TaskCreate taskCreate={AddNewTask} />
        </div>
        <div className="col-md-12">
          <h4>Tasks</h4>
          <table className="table table-striped table-border">
            <thead>
              <tr>
                <th className="text-center">Title</th>
                <th className="text-center">Description</th>
                <th className="text-center">Start Date</th>
                <th className="text-center">Deadline</th>
                <th className="text-center">Done</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="bg-info text-center text-white">To Do</td>
              </tr>
              <CountRows taskData={taskData} />
              {PrintOnTable(false)}
              <tr>
                <td colSpan="5" className="bg-success text-center text-white">Done</td>
              </tr>
              <CountRowsDone taskData={taskData} />
              {PrintOnTable(true)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
