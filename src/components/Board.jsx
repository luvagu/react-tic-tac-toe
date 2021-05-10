import { Fragment, useState } from 'react'
import Cell from './Cell'

function Board() {
	const [cells, setCells] = useState(new Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('x')
	const status = 'Next player: X'

	const handleClick = (index) => {
		const newCells = [...cells]
        newCells[index] = currentPlayer
		setCells(newCells)
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
	}

	console.log(cells)

	return (
		<Fragment>
			<div>{status}</div>
			<main className={`game-grid ${currentPlayer}`}>
				{cells.map((value, index) => (
					<Cell key={index} value={value} onClick={() => handleClick(index)} />
				))}
			</main>
		</Fragment>
	)
}

export default Board
