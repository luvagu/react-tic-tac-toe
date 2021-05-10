import Square from './Square'

function Board({ index }) {
	const boardCells = new Array(9).fill(null)
	const status = 'Next player: X'

	return (
		<main className="game-grid">
			{boardCells.map((cell, index) => (
				<Square value={index} />
			))}
		</main>
	)
}

export default Board
