import { Fragment, useState } from 'react'
import { calculateWinner, checkDraw, calculateMoveLocation } from '../helpers'
import Board from './Board'
import Overlay from './Overlay'

function Game() {
	const [history, setHistory] = useState([{ cells: new Array(9).fill(null), moveLocation: '' }])
	const [moveNumber, setMoveNumber] = useState(0)
	const [isXTurn, setIsXTurn] = useState(true)
	const [isSelectedMove, setIsSelectedMove] = useState(null)
	const [isClosed, setIsClosed] = useState(true)
	const { cells } = history[moveNumber]
	const { winner, wCells } = calculateWinner(cells)
	const isDraw = checkDraw(cells)
	const player = isXTurn ? 'x' : 'o'

	const status = winner
		? `Winner: ${winner.toUpperCase()}`
		: isDraw
		? 'Cats game!'
		: `Next player: ${player.toUpperCase()}`

	const handleClick = (index) => {
		const newHistory = history.slice(0, moveNumber + 1)
		const newCells = [...cells]
		const moveLocation = calculateMoveLocation(index)
		if (winner || newCells[index]) return
		newCells[index] = player
		setHistory([...newHistory, { cells: newCells, moveLocation }])
		setMoveNumber(newHistory.length)
		setIsXTurn(!isXTurn)
		setIsSelectedMove(null)
		setIsClosed(true)
	}

	const goToMove = (move) => {
		setMoveNumber(move)
		setIsXTurn(move % 2 === 0)
		setIsSelectedMove(move)
	}

	return (
		<Fragment>
			<div className="floating-panel">
				<p>{status}</p>
				<ol>
					{history.map(({ cells, moveLocation }, move) => (
						<li key={move}>
							<button
								className={isSelectedMove === move && move > 0 ? 'selected' : ''}
								onClick={() => goToMove(move)}
							>
								{move ? `Go to move #${move}` : `Go to game start`}
							</button>
							<span>{moveLocation && moveLocation}</span>
						</li>
					))}
				</ol>
			</div>

			<Board
				cells={cells}
				player={player}
				wCells={wCells}
				handleClick={handleClick}
			/>

			{(winner || isDraw) && isClosed && (
				<Overlay message={status} close={() => setIsClosed(false)} />
			)}
		</Fragment>
	)
}

export default Game
