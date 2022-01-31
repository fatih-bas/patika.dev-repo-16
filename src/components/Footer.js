import React from "react";

const Footer = ({
  todos,
  deleteCompleted,
  categoryHandler,
  activeCategory
}) => {
    
    let remain = todos.filter(todo => todo.isComplete === false);
   
  return (
    <> 
      <footer className="footer">
        <span className="todo-count">
              {remain.length} items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/"
              className={activeCategory === "All" ? "selected" : ""} onClick={()=> categoryHandler("All")}>
              All
            </a>
          </li>
          <li>
            <a href="#/"
            className={activeCategory === "Active" ? "selected" : ""} onClick={()=> categoryHandler("Active")}>
              Active
            </a>
          </li>
          <li>
          <a href="#/"
            className={activeCategory === "Completed" ? "selected" : ""} 
            onClick={() => categoryHandler("Completed")}>
            Completed
          </a>
          </li>
        </ul>
        
          {todos.some( todo => todo.isComplete === true) && (
            <button 
              className="clear-completed" 
              onClick={deleteCompleted}>
              Clear completed
            </button>
          )}
         
      </footer>
    </>
  )

}
export default Footer;
