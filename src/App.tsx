import { useState } from 'react'
import './App.css'
import { Habit } from './assets/components/habits'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Habit completed={3}/>
    <Habit completed={5}/>
    <Habit completed={7}/>
    <Habit completed={10}/>
    <Habit completed={8}/>
   </div>
  )
}

export default App
