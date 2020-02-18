import React, { useReducer } from 'react';

//componentst
import { Form } from './components/Form/Form';
import ItemDisplay from './components/ItemDisplay/ItemDisplay';
import { initialState, todoReducer } from './reducers/todoReducer';

//styles
import './App.css';

function App() {
  //state
  const [state, dispatch] = useReducer(todoReducer, initialState);

  //functions
  const handleSubmit = e => {
    const subButton = document.querySelector('.submit');
    e.preventDefault();
    dispatch({
      type: 'addItem', payload: {
        completed: 'false',
        id: Date.now()
      }
    });
    subButton.setAttribute('disabled', true);
  }//end handleSubmit

  const handleChange = e => {
    const subButton = document.querySelector('.submit');
    if (e.target.value !== ' ') {
      subButton.removeAttribute('disabled');
      dispatch({ type: 'input', payload: e.target.value })
    }
  }//end handleChange

  const handleCompleted = (e, completed) => {
    const targetId = e.target.id;
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed')
    } else {
      e.target.classList.add('completed');
    }
    dispatch({ type: 'complete', payload: { id: targetId } });
  }// end handleCompleted

  const clearCompleted = () => {
    dispatch({ type: 'clear' });
  }//end clearCompleted

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form
        value={state.text}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        clearCompleted={clearCompleted}
      />
      <ItemDisplay handleCompleted={handleCompleted} list={state.todos} />
    </div>
  );
}//end func

export default App;
