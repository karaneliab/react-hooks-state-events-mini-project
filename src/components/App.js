import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory,setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", category: "Shopping" },
    { text: "Read a book", category: "Personal" },
  ]);
function handleCategoryChange(category){
  setSelectedCategory(category)
}
 const categories = ["All","Code","Food","Money","Misc"]
function handleRemoveTask(taskText) {
  setTasks((currentTasks) => currentTasks.filter((task) => task.text !== taskText));
}
const handleTaskFormSubmit = (newTask) => {
  // Update the list of tasks with the new task
  setTasks((prevTasks) => [...prevTasks, newTask]);
};
  return (
    <div className="App">
      <h2>My tasks</h2>
      
      <CategoryFilter onSelectedCategory={handleCategoryChange}categories={CATEGORIES} selectedCategory={selectedCategory}  />
      <NewTaskForm  onTaskFormSubmit={handleTaskFormSubmit} categories={categories}/>
      <TaskList   onRemoveTask={handleRemoveTask} tasks={TASKS} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
