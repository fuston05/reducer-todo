import React from 'react';

const ItemDisplay = ({list, handleCompleted}) => {
  return (
    <div className= 'itemDisplayCont'>
      {list && list.map((item) => {
        return <h1 onClick= {handleCompleted} completed= {item.completed} id= {item.id} key= {item.id} className= 'item'>{item.name}</h1>
      })}
    </div>
  )
}

export default ItemDisplay;