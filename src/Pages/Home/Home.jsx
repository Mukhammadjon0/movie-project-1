import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { kinolar } from '../../Kinolar'
import Kino from '../Kino/Kino'
import './Home.css'
function Home() {
  // const navigate=useNavigate()
  
  return (
    <div className='home-page'>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deleniti?</p>

        <h1 className='kinolar-text'>Kinolar</h1>
        <div className="kino-cards">
        {kinolar.map(item=>(
          <Kino key={item.id} item={item} {...item}/>
        ))}

        </div>

    </div>
  )
}

export default Home