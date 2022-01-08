import React from "react";

const Footer = ({
  todos,
  deleteCompleted,
  categoryHandler,
  activeCategory
}) => {
    {/*filtered not completed*/}
    let remain = todos.filter(todo => todo.isComplete === false);
   
  return (
    <> 
      <footer className="footer">
        <span className="todo-count">
              {remain.length} items left
        </span>

        <ul className="filters">
          <li>
            <a 
              className={activeCategory === "All" ? "selected" : ""} onClick={()=> categoryHandler("All")}>
              All
            </a>
          </li>
          <li>
            <a 
            className={activeCategory === "Active" ? "selected" : ""} onClick={()=> categoryHandler("Active")}>
              Active
            </a>
          </li>
          <li>
          <a 
            className={activeCategory === "Completed" ? "selected" : ""} 
            onClick={() => categoryHandler("Completed")}>
            Completed
          </a>
          </li>
        </ul>
        {/*show/hide clear completed button*/}
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