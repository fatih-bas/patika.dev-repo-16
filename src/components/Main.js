import React, { useState } from 'react'
import Header from './Header'
import Todo from './Todo'
import Footer from './Footer'


const Main = () => {
	const [todos,setTodos] = useState([])
	const [activeCategory, setActiveCategory] = useState("All");

  // new Todo
	const addTodo = (todo) => {
    // if input is empty
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		
	}

  // completed todo
	const setComplete = id => {
		let updatedTodos = todos.map(todo => {
			if(todo.id === id ) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos);
	}
  // delete todo
	const deleteTodo = id => {
		let deleteArr =[...todos].filter(todo => todo.id !== id);
		setTodos(deleteArr);
	}

  // set categories
	const categories = activeCategory === "All"
      ? todos : activeCategory === "Active"
      ? todos.filter(todo => todo.isComplete === false)
      : todos.filter(todo => todo.isComplete === true)
	  const categoryHandler = (category) => {
		  setActiveCategory(category);
	  }
    // completed all todo
	const toggleAll = () => {
		const allTodos = todos.every(todo => todo.isComplete === true);
		const toggleAll = todos.map(todo => 
			{
				if (todo.isComplete === false) {
					todo.isComplete = true
				} else if (allTodos) {
					todo.isComplete = false
				}
				return todo;
			})
		setTodos(toggleAll);
	}
  // delete completed todo
	const deleteCompleted = () => {
		let completed = [...todos].filter(todo => todo.isComplete === false);
		setTodos(completed);
	}
    return (
      <section className="todoapp">
	      <Header onSubmit={addTodo}/>
          <section className="main">
            <input 
              className="toggle-all" 
              id="toggle-all" 
              type="checkbox" 
              onChange={toggleAll} 
            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
              <Todo 
                todos ={categories}
                setComplete={setComplete}
                deleteTodo={deleteTodo}
              />
            </ul>
          </section>

          {/*hide footer if todo not exist*/}
          {todos.length > 0 && 
            <Footer 
              todos ={todos}
              deleteCompleted={deleteCompleted}
              categoryHandler = {categoryHandler}
              activeCategory={activeCategory}
          />
        }
    </section>
  );
}

export default Main;