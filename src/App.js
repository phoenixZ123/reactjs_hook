import { useState, useEffect } from 'react';
import './App.css';
import { Trip } from './components/TripList/Trip';
function App() {
  const [trip, setTrip] = useState([]);

  // use useEffect hook because should not rerender looping.
  // in the useEffect should not use async await cuz will cause error
  useEffect(() => {
    fetch("http://localhost:2807/trips")
      .then(res => res.json())
      .then(data => {
        setTrip(data);
        console.log(data);
      })
  }, [])
  // run onetime so [] write
  return (
    <div className="App">
      <Trip data={trip} />
    </div>
  );
}

export default App;
