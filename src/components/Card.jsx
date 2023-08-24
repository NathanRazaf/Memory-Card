import backCard from '../assets/back_card.png';
import '../styles/Card.css'
function Card({image, isFlipped, onClick, interactionAllowed}) {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''} ${interactionAllowed ? '' : 'no-pointer-events'}`} onClick={() => onClick(image)}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={image.image} alt="" />
                    <p>{image.text}</p>
                </div>
                <div className="card-back">
                    <img src={backCard} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card