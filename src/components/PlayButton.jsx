import '../styles/PlayButton.css';
function PlayButton({onClick, text, isDisabled}) {
    return (
        <button className="play-button" onClick={onClick} disabled={isDisabled}>{text}</button>
    )
}

export default PlayButton