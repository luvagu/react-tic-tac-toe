export const calculateWinner = (cells) => {
	const combinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (const combination of combinations) {
		const [a, b, c] = combination

		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return {
				winner: cells[a],
				wCells: { a, b, c },
			}
		}
	}

	return {
		winner: null,
		wCells: { a: null, b: null, c: null },
	}
}

export const checkDraw = (cells) => cells.every((cell) => cell !== null)

export const calculateMovePosition = (index) => {

}
