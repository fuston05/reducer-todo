import React, {useReducer} from 'react';

//componentst
import {Form} from './components/Form/Form';
import ItemDisplay from './components/ItemDisplay/ItemDisplay';
import {initialState, todoReducer} from './reducers/todoReducer';

//styles
import './App.css';

function App() {
  //state
  const [state, dispatch]= useReducer(todoReducer, initialState);

  //functions
  const handleSubmit= e => {
    e.preventDefault();
    dispatch({type: 'addItem'});
    console.log('state text:', state.text);  
    console.log('state todos:', state.todos);  
  }//end handleSubmit

  const handleChange= e => {
    dispatch({ type: 'input', payload: e.target.value} )
    console.log(e.target.value);
  }//end handleChange

  const handleCompleted= e => {
    const targetId= e.target.id;
    console.log('id: ', e.target.id);
    console.log('completed: ', e.target.completed);
    e.target.classList.add('completed');
    dispatch({ type: 'complete', payload: {id: targetId} });
  }// end handleCompleted

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form 
        value= {state.inputField}
        handleSubmit= {handleSubmit} 
        handleChange= {handleChange}
        />
        <ItemDisplay handleCompleted= {handleCompleted} list= {state.todos} />
    </div>
  );
}//end func

export default App;
