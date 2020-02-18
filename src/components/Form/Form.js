import React from 'react';

export const Form = ({value, handleSubmit, handleChange, clearCompleted}) => {
  

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Todo Item: &nbsp;&nbsp;
          <input 
            onChange= {e => {handleChange(e)}}
            value= {value}
            type= 'text'
            id= 'text'
            className= 'text'
            name= 'text'
            placeholder= 'Take out trash'
          />
        </label>
        <button disabled className= 'submit' type= 'submit'>Add Item</button>
        <button 
          onClick= {clearCompleted}
          type= 'button'>Clear Completed</button>
      </form>
    </div>
  )
}
