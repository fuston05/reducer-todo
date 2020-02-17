import React, {useReducer} from 'react';

//componentst
import {Form} from './components/Form/Form';
import {initialState, todoReducer} from './reducers/todoReducer';

//styles
import './App.css';

function App() {
  //state

  const [state, dispatch]= useReducer(todoReducer, initialState);

  //functions
  const handleSubmit= e => {
    e.preventDefault();
    console.log('submitted');
  }//end handleSubmit

  const handleChange= e => {
    console.log(e.target.value);
  }//end handleChange

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form 
        handleSubmit= {handleSubmit} 
        handleChange= {handleChange}
        />
    </div>
  );
}//end func

export default App;
