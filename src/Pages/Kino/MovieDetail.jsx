import React from 'react'
import './MovieDetail.css'
import { useParams } from 'react-router-dom'
import { kinolar } from '../../Kinolar'

function MovieDetail() {
    const {id}=useParams()
    const kino=kinolar.find(item=>item.id===Number(id))
    console.log(kino)
  return (
    <div className='kino-card'>
        <img src={kino.image} alt="kino" />
        <div className="desc">
            <h3>{kino.name}</h3>
            <p>{kino.desc}</p>
        </div>
    </div>
  )
}

export default MovieDetail