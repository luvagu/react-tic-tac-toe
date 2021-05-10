import { Fragment } from 'react'
import Cell from './Cell'

function Board({ index }) {
	const boardCells = new Array(9).fill(null)
	const status = 'Next player: X'

	return (
		<Fragment>
            <div>{status}</div>
            <main className="game-grid">
                {boardCells.map((cell, index) => (
                    <Cell key={index} value={index} />
                ))}
            </main>
        </Fragment>
	)
}

export default Board
