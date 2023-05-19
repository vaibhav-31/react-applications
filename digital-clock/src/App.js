import { useState } from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTIme ] = useState(time);


  function updateTime() {
    time = new Date().toLocaleTimeString();
    setCurrentTIme(time);
  }

  setInterval(updateTime,1000);

  return (
    <div className="App">
      
        <>
        <h1>{currentTime}</h1>
        </>

    </div>
  );
}

export default App;
