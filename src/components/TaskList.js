import React from "react";
import Task from "./Task"
function TaskList({tasks,selectedCategory}) {
  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => 
  task.category === selectedCategory
  )


  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
  {filteredTasks.map ((task)=>(
     <Task key = {task.text} text = {task.text} category = {task.category}/>
  ))}
   
    </div>
  );

  }
export default TaskList;
