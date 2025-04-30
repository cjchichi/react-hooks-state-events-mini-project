/*
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES } from "../data";  // Ensure this path is correct


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;



/*
import React, { useState } from 'react';
import Task from './Task';
import CategoryFilter from './CategoryFilter';
import { CATEGORIES } from '../data';

const tasksData = [
  { id: 1, text: 'Build a todo app', category: 'Code' },
  { id: 2, text: 'Buy rice', category: 'Groceries' },
  { id: 3, text: 'Walk the dog', category: 'Chores' },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasks] = useState(tasksData);

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {filteredTasks.map(task => (
        <Task key={task.id} text={task.text} category={task.category} />
      ))}
    </div>
  );
};

export default App;



/*
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
*


import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks =
    selectedCategory === "All"
      ? TASKS
      : TASKS.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES} // <-- important
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="tasks">
        {filteredTasks.map((task) => (
          <div key={task.text} className="task">
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

*


import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} categories={CATEGORIES} />
    </div>
  );
}

export default App;
*/


import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data.js"; // Adjust path if needed
import TaskList from "./TaskList.js";
import CategoryFilter from "./CategoryFilter.js";
import NewTaskForm from "./NewTaskForm.js";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (textToRemove) => {
    setTasks(tasks.filter((task) => task.text !== textToRemove));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;