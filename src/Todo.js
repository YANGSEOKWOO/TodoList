import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems([...items, { text, completed: false }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.newItem.value.trim();
    if (text) {
      addItem(text);
      e.target.elements.newItem.value = '';
    }
  }

  function toggleComplete(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'todo-item todo-completed' : 'todo-item'}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(index)}
              className="todo-checkbox"
            />
            <span className="todo-text">{item.text}</span>
            <button onClick={() => deleteItem(index)} className="todo-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newItem" className="todo-input" />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>
    </div>
  );
}

export default Todo;
