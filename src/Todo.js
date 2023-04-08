import React, { useState } from 'react';

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
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(index)}
            />
            {item.text}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newItem" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todo;
