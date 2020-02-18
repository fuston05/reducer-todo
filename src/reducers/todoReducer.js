import React from 'react';

export const initialState= {
  todos: [], 
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
      if(state.todos){
        return {...state, text: '', todos: [...state.todos, newObj]}
      }else{return {...state, text: '', todos: [newObj]} }

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

      case 'clear': 
        const clearItem= state.todos.filter(item => {
          return(
            item.completed === 'false'
          )
        });
        return { ...state, todos: clearItem }


    default: 
      return state;
  }//end switch
}//end reducer