import React from 'react';

//style
import './ItemDisplay.scss'

const ItemDisplay = ({list, handleCompleted}) => {
  return (
    <div className= 'itemDisplayCont'>
      {list && list.map((item) => {
        return <h1 
        completed= {item.completed}
        onClick= {e => {handleCompleted(e, item.completed)}} 
        id= {item.id} 
        key= {item.id} 
        className= 'item'>{item.name}</h1>
      })}
    </div>
  )
}

export default ItemDisplay;