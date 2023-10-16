import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import "./trip.css";
export const Trip = () => {
  const [api, setApi] = useState("http://localhost:2807/trips");

  const { data, loading, error } = useFetch(api);
  return (
    <div className='container'>
      <p>READY TO GO?</p>
      {error && <h3>error</h3>}

      {!error && <div>{loading && (<h3>Loading</h3>)}
        {
          data && data.map(data => <ul key={data.id} className='trips-list'><li className='trip'>
            <h3>{data.name}</h3><p>price - {data.price} mmk</p> </li></ul>)
        }
        <button onClick={() => setApi("http://localhost:2807/trips")}>All</button>
        <button onClick={() => setApi("http://localhost:2807/trips?location=canada")}>Trip To Canada</button>
      </div>}
    </div>
  )
}
