import { Fragment, useState } from 'react'
import Cell from './Cell'

const calculateWinner = (cells) => {
    const Combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]    
    ]

    for (const combination of Combinations) {
        const [a, b, c] = combination

        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a]
        }
    }

    return null
}

function Board() {
	const [cells, setCells] = useState(new Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const [history, setHistory] = useState([])
    const winner = calculateWinner(cells)
	const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer.toUpperCase()}`

	const handleClick = (index) => {
        setHistory({ cells })
		const newCells = [...cells]
        if (winner || newCells[index]) return
        newCells[index] = currentPlayer
		setCells(newCells)
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
	}

	console.log({cells, history})

	return (
		<Fragment>
			<div className="">{status}</div>
			<main className={`game-grid ${currentPlayer}`}>
				{cells.map((value, index) => (
					<Cell key={index} value={value} onClick={() => handleClick(index)} />
				))}
			</main>
		</Fragment>
	)
}

export default Board
