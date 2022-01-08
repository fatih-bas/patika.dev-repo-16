import React, { useState } from "react";

const Header = ({onSubmit}) => {
  const [input,setInput] = useState('');

  const handleChange = (e) => {
      setInput(e.target.value);
  }

 const handleSubmit = (e) => {
    e.preventDefault();
    {/*set random uniq id*/}
    onSubmit({
      
         id:Math.floor(Math.random()*10000),
         text:input,
         isComplete:false
    });
    setInput('');
 }

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
        <input 
          className="new-todo" 
          value={input} 
          onChange={handleChange} 
          placeholder="What needs to be done?" 
          autoFocus 
        />
        </form>
      </header>

    </>
  )
}

export default Header;