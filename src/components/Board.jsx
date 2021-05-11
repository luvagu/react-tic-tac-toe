import Cell from './Cell'

function Board({ cells, player, wCells, handleClick }) {
    const { a, b, c } = wCells

	return (
        <main className={`game-grid ${player}`}>
            {cells.map((value, index) => (
                <Cell key={index} value={`${value} ${a === index || b === index || c === index ? 'w' : ''}`} onClick={() => handleClick(index)} />
            ))}
        </main>
	)
}

export default Board
