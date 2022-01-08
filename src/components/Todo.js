import React from "react";

const Task = ({todos,setComplete,deleteTodo}) => {
  return (
    <>
      {
        todos.map((todo) => (
          <li key={todo.id} 
            className={todo.isComplete ? 'completed' : ''}   >
            <div className="view">
              <input 
                className="toggle" 
                type="checkbox" 
                checked={todo.isComplete} 
                onChange={()=> setComplete(todo.id)}
              />
              <label>{todo.text}</label>
              <button 
                className="destroy" 
                onClick={()=> deleteTodo(todo.id)}></button>
            </div>
          </li>
        ))
		  }
    </>
  );
}

export default Task;