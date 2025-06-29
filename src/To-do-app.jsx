import React, {useState} from 'react';

function ToDoApp() {
    const [tasks, setTasks] = useState(["Buy groceries", "Walk the dog", "Read a book"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            const capitalizedTask = newTask.charAt(0).toUpperCase() + newTask.slice(1);

            setTasks(t => [...t, capitalizedTask]);
            setNewTask("");
        }
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
        <div className='to-do-list-app'>
            <h1>To Do List App</h1>
            <div>
                <input 
                    type="text"
                    placeholder='Add a task...'
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button-up' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='move-button-down' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>

        </div>
    )
}
export default ToDoApp;