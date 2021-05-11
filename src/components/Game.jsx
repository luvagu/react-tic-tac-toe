import { Fragment, useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

function Game() {
    const [history, setHistory] = useState([{ cells: new Array(9).fill(null) }])
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const { cells } = history[history.length - 1]
    const winner = calculateWinner(cells)
    const status = winner ? `Winner: ${winner.toUpperCase()}` : `Next player: ${currentPlayer.toUpperCase()}`

    const handleClick = (index) => {
		const newCells = [...cells]
        if (winner || newCells[index]) return
        newCells[index] = currentPlayer
		setHistory([...history, { cells: newCells }])
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
	}

    const goToMove = (move) => {
        console.log(move);
    }

	return (
        <Fragment>
			<div className="">
                <p>{status}</p>
                <ol>
                    {history.map((step, move) => {
                        const label = move ? `Go to mone #${move}`: `Go to game start`
                        return (
                            <li key={move}>
                                <button onClick={() => goToMove(move)}>{label}</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
			<Board cells={cells} currentPlayer={currentPlayer} handleClick={handleClick} />
		</Fragment>
    )
}

export default Game
