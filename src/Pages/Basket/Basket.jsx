import React, { useContext } from 'react'
import { StateContext } from '../../context'
import './Basket.css'

function Basket() {
    const {state}=useContext(StateContext)
  return (
    <div className="basked">
        <h1>tanlangan kinolar</h1>
    <div className='basked-cards'>
        {state.basket.map(item=>(
            <div className='basket-card' key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>

    </div>
  )
}

export default Basket