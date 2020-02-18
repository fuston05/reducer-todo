import React from 'react';

export const initialState= {
  todos: [
    {
    name: 'Do the dishes',
    completed: false,
    id: Date.now()
  }
], 
  text: ''
};

export const todoReducer= (state, action) => {
  switch(action.type){
    case 'input' : 
      return {...state, text: action.payload};
    case 'addItem': 
      let newObj= {
        name: state.text,
        completed: false,
        id: Date.now()
      }
      return {...state, todos: [...state.todos, newObj]}
    case 'complete': 
      const compItem= state.todos.map(item => {
        return item.id === action.payload.id ? item.completed: true;
      });
      return { ...state, compItem }


    default: 
      return state;
  }//end switch
  
}//end reducer