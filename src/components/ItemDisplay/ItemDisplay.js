import React from 'react';

//style
import './ItemDisplay.scss'

const ItemDisplay = ({ list, handleCompleted }) => {

  return (
    <>
      {
        list.map(item => {
          return (
            <div key={item.id} className='itemCont'>
              <h1
                completed={item.completed}
                onClick={e => { handleCompleted(e, item.completed) }}
                id={item.id}
                className='item'>{item.name}</h1>
            </div>
          )//end return
        })
      }
    </>
  )
}

export default ItemDisplay;