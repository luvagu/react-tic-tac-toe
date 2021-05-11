import Cell from './Cell'

function Board({ cells, currentPlayer, handleClick }) {
	return (
        <main className={`game-grid ${currentPlayer}`}>
            {cells.map((value, index) => (
                <Cell key={index} value={value} onClick={() => handleClick(index)} />
            ))}
        </main>
	)
}

export default Board
