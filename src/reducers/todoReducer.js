import React from 'react';

export const initialState= {
  item: '', 
  completed: false,
  id: ''
};

export const todoReducer= (state, action) => {
  switch(action.type){
    case 'poop' : return 'poop'
    
    default: 
      return state;
  }//end switch
  
}//end reducer