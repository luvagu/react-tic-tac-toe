import { Fragment, useState } from 'react'
import Cell from './Cell'

function Board() {
	const [cells, setCells] = useState(new Array(9).fill(null))
	const status = 'Next player: X'

	const handleClick = (index) => {
		cells[index] = 'x'
		setCells([...cells])
	}

	console.log(cells)

	return (
		<Fragment>
			<div>{status}</div>
			<main className="game-grid">
				{cells.map((value, index) => (
					<Cell key={index} value={value} onClick={() => handleClick(index)} />
				))}
			</main>
		</Fragment>
	)
}

export default Board
