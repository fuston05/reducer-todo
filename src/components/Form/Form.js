import React from 'react';

export const Form = ({value, handleSubmit, handleChange}) => {
  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Todo Item: &nbsp;&nbsp;
          <input 
            onChange= {handleChange}
            value= {value}
            type= 'text'
            id= 'text'
            name= 'text'
            placeholder= 'Todo'
          />
        </label>
        <button type= 'submit'>Add Item</button>
      </form>
    </div>
  )
}
