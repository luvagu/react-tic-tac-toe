function Overlay({ message, close }) {
    return (
        <div class="overlay-messages">
            <div>{message}</div>
            <button onClick={close}>Restart Game</button>
        </div>
    )
}

export default Overlay
