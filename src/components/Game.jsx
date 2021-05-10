import Board from './Board'

function Game() {
    const [history, setHistory] = useState(new Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('x')
    
	return <Board />
}

export default Game
