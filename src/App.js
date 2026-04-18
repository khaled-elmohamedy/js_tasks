import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(['Just an example']);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (!inputValue) {
      alert('Please enter a task');
    } else if (inputValue.length < 3) {
      alert('Task must be at least 3 characters long');
    } else {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((value, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <div className="todo-stats">
        Total Tasks: {tasks.length}
      </div>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(text) => setInputValue(text.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;