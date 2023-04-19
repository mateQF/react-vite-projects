import { Square } from './Square'
import { useState } from 'react'
import { checkWinnerFrom, checkEndGame } from '../logic/board'
import { WinnerModal } from './WinnerModal'
import { saveGameToStorage, resetGameStorage } from '../logic/storage'
import confetti from 'canvas-confetti'

export const Game = ({ TURNS, turn, setTurn }) => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [winner, setWinner] = useState(null) // null -> no winner, false -> draw

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // save match
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <>
      <button onClick={resetGame}>RESET</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}

        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </>
  )
}
