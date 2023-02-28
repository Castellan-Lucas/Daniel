import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <div className='bg-white w-screen h-screen'>
    <Habit completed={1}/>
    <Habit completed={2}/>
    <Habit completed={3}/>
    <Habit completed={4}/>
    <Habit completed={5}/>
    </div>
  )
}

export default App
