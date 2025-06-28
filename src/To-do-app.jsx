import React, {useState} from 'react';

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(task) {
        setTasks([...tasks, task]);
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index === 0) return; // Already at the top
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        if (index === tasks.length - 1) return; // Already at the bottom
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }

    return (
        <div className='todo-app'>

        </div>
    )
}
export default ToDoApp;