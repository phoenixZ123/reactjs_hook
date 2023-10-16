import React from 'react'
import "./trip.css";
export const Trip = ({ data, children }) => {
  return (
    <div className='container'>
      <p>READY TO GO?</p>
      {
        data.map(data => <ul key={data.id} className='trips-list'><li className='trip'>
          <h3>{data.name}</h3><p>price - {data.price} mmk</p> </li></ul>)
      }
      {children}
    </div>
  )
}
