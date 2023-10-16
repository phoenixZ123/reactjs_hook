import React from 'react'

export const Trip = ({ data }) => {
  return (
    <div>
      {
        data.map(data => <ul key={data.id}><li><h3>{data.name}</h3> price - {data.price} mmk</li></ul>)
      }</div>
  )
}
