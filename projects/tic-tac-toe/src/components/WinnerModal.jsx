import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'DRAW' : 'WINNER'
  const winnerHeader = winner ? <Square>{winner}</Square> : <Square>-</Square>

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>
          {winnerHeader}
        </header>

        <footer>
          <button onClick={resetGame}>RESET</button>
        </footer>
      </div>
    </section>
  )
}
