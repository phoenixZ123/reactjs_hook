
import { useEffect, useState } from 'react';
import './App.css';
import { Trip } from './components/TripList/Trip';
function App() {
  const [data, setData] = useState("hello");

  // if same data render not return back
  // if cannot same data will be render
  //use in effect function call to next function will use to useCallBack
  // array or oject use useRef
  const change = () => {
    setData("updated");

  }
  useEffect(() => {
    change();
  }, [change])
  return (
    <div className="App">
      {data}
      <Trip />
    </div>
  );
}

export default App;
