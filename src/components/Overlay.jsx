function Overlay({ message, close }) {
    return (
        <div className="overlay-messages">
            <div>{message}</div>
            <button onClick={close}>Close</button>
        </div>
    )
}

export default Overlay
