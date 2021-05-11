import { Fragment, useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'
import Overlay from './Overlay'

function Game() {
	const [history, setHistory] = useState([{ cells: new Array(9).fill(null) }])
	const [moveNumber, setMoveNumber] = useState(0)
	const [currentPlayer, setCurrentPlayer] = useState('x')
    const [isActiveId, setIsActiveId] = useState(null)
	const { cells } = history[moveNumber]
	const winner = calculateWinner(cells)

	const status = winner
		? `Winner: ${winner.toUpperCase()}`
		: `Next player: ${currentPlayer.toUpperCase()}`

	const handleClick = (index) => {
		const newHistory = history.slice(0, moveNumber + 1)
		const newCells = [...cells]
		if (winner || newCells[index]) return
		newCells[index] = currentPlayer
		setHistory([...newHistory, { cells: newCells }])
		setMoveNumber(newHistory.length)
		setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
        setIsActiveId(null)
	}

	const goToMove = (move) => {
		setMoveNumber(move)
        setIsActiveId(move)
	}

	return (
		<Fragment>
			<div className="floating-panel">
				<p>{status}</p>
				<ol>
					{history.map((step, move) => (
						<li key={move}>
							<button className={isActiveId === move ? 'boldText' : ''} onClick={() => goToMove(move)}>
								{move ? `Go to move #${move}` : `Go to game start`}
							</button>
						</li>
					))}
				</ol>
			</div>
			<Board
				cells={cells}
				currentPlayer={currentPlayer}
				handleClick={handleClick}
			/>
            {winner && <Overlay message={status} close={() => setHistory(0)} />}
		</Fragment>
	)
}

export default Game
