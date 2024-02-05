// import React from "react";

// function NewTaskForm({categories}) {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//           {categories.map(category => (
//             // Exclude "All" category
//             category !== "All" && (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             )
//           ))}

// {/* 
//   <option value="Code">Code</option>
//   <option value="Food">Food</option>
//   <option value="Money">Money</option>

//   <option value="Misc">Misc</option> */}

//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;


import React, { useState } from "react";

function NewTaskForm({ categories }) {
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

    // Do something with the form data (e.g., submit to a backend or update state)
    console.log("Task Details:", taskDetails);
    console.log("Selected Category:", selectedCategory);

    // Reset form fields (if needed)
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
