import Card from "./Card.jsx";
import '../styles/Game.css'
function Game({images, onClick, isFlipped, interactionAllowed}) {
    return (
        <div className="game">
            {images.map((img, index) => (
                <Card
                    key={index}
                    image={img}
                    onClick={onClick}
                    isFlipped={isFlipped}
                    interactionAllowed={interactionAllowed}
                />
            ))}
        </div>
    )
}

export default Game;