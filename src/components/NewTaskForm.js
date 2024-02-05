import React, { useState } from "react";

function NewTaskForm({ categories,onTaskFormSubmit }) {
  // State to manage form inputs
  const [taskDetails, setTaskDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Event handler for input change
  const handleDetailsChange = (e) => {
    setTaskDetails(e.target.value);
  };

  // Event handler for category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTas = {
      details: taskDetails,
      category:selectedCategory,
    };

    onTaskFormSubmit(newTas)
    console.log("Task Details:", taskDetails);
    console.log("Selected Category:", selectedCategory);

    // Reset form fields 
    setTaskDetails("");
    setSelectedCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails}
          onChange={handleDetailsChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            // Exclude "All" category
            category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
