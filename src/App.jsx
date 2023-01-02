import React, {useState} from 'react'
import './App.css'

let times = new Date().toLocaleTimeString();
const App = () => {
  const [time, setTime] = useState(times)
  setInterval(() => {
    times = new Date().toLocaleTimeString();
    setTime(times)
  }, 1000);
  return (
    <div className='container'>
      <h1>{time}</h1>
    </div>
  )
}

export default App
