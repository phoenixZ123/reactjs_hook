import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Trip } from './components/TripList/Trip';
function App() {
  const [trip, setTrip] = useState([]);
  const [api, setApi] = useState("http://localhost:2807/trips");

  const fetchApi = useCallback(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setTrip(data);
        console.log(data);
      })
  }, [api])
  //if you want to again use []dependency should use callback
  // use useEffect hook because should not rerender looping.
  // in the useEffect should not use async await cuz will cause error
  useEffect(() => {
    fetchApi();
  }, [fetchApi])
  //if you want to enter function in dependency []array should use useCallBack
  // run onetime so [] write
  return (
    <div className="App">

      <Trip data={trip} >
        <button onClick={() => setApi("http://localhost:2807/trips")}>All</button>
        <button onClick={() => setApi("http://localhost:2807/trips?location=canada")}>Trip To Canada</button>
      </Trip>


    </div>
  );
}

export default App;
