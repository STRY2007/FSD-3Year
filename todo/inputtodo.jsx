import React, { useState } from 'react';

function InputToDo({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    const value = inputValue.trim();
    if (!value) return;
    onAdd(value);
    setInputValue('');
  };

  return (
    <div className="input-todo">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (task) => {
    setTodoList((prev) => [...prev, task]);
  };

  const deleteHandler = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h2>To do list</h2>

      <InputToDo onAdd={addTodo} />

      <ul>
        {todoList.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => deleteHandler(index)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;