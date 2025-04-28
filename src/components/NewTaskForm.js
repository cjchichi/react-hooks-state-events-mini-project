/*
import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
*

import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText(""); // Clear the input after submission
    setCategory(categories[0]); // Reset category to the first option
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
*/

// NewTaskForm.js
import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;  // Make sure to export default