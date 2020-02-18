import React from 'react';

export const initialState= {
  todos: [
    {
    name: '',
    completed: '',
    id: ''
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
        completed: action.payload.completed,
        id: action.payload.id
      }//end newObj
      if(state.todos > 0){
        return {...state, todos: [...state.todos, newObj]}
      }else{return {...state, todos: [newObj] } }
    case 'complete': 
      const compItem= state.todos.map(item => {
        if(item.id == action.payload.id){
          // console.log('id match: ', item.id)
          if(item.completed === 'false'){
            item.completed= 'true'
          }else{item.completed= 'false'}
          return item;
        }else{return item}
      });
      return { ...state, todos: compItem }


    default: 
      return state;
  }//end switch
}//end reducer