import './App.css'
import { Game } from './components/Game'
import { Turn } from './components/Turn'
import { useState } from 'react'
import { TURNS } from './constants'

function App () {
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })

  return (
    <main className='board'>
      <h1>Tic-tac-toe</h1>
      <Game setTurn={setTurn} turn={turn} TURNS={TURNS} />
      <Turn turn={turn} TURNS={TURNS} />
    </main>
  )
}

export default App
