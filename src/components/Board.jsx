import Cell from './Cell'

function Board({ cells, player, handleClick }) {
	return (
        <main className={`game-grid ${player}`}>
            {cells.map((value, index) => (
                <Cell key={index} value={value} onClick={() => handleClick(index)} />
            ))}
        </main>
	)
}

export default Board
