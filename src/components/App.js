
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES } from "../data";  // Ensure this path is correct


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
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
*/