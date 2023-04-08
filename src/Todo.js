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

  function toggleIncomplete(index) {
    const newItems = [...items];
    newItems[index].incomplete = !newItems[index].incomplete;
    setItems(newItems);
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const incompleteItems = items.filter(item => !item.completed);

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'todo-item todo-completed' : item.incomplete ? 'todo-item todo-incomplete' : 'todo-item'}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(index)}
              className="todo-checkbox"
            />
            <span className="todo-text">{item.text}</span>
            <button onClick={() => deleteItem(index)} className="todo-delete-btn">Delete</button>
            {!item.completed && (
              <input
                type="checkbox"
                checked={item.incomplete}
                onChange={() => toggleIncomplete(index)}
                className="todo-checkbox"
              />
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newItem" className="todo-input" />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>
      {incompleteItems.length > 0 && (
        <div className="todo-incomplete">
          <h2> 완료 못한 {incompleteItems.length} 개의 목록</h2>
          <ul className="todo-incomplete-list">
            {incompleteItems.map((item, index) => (
              <li key={index} className="todo-incomplete-item">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Todo;
