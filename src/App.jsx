import img1 from "./assets/gameImgs/img1.jpeg";
import img2 from "./assets/gameImgs/img2.jpeg";
import img3 from "./assets/gameImgs/img3.jpeg";
import img4 from "./assets/gameImgs/img4.jpeg";
import img5 from "./assets/gameImgs/img5.jpeg";
import img6 from "./assets/gameImgs/img6.jpeg";
import img7 from "./assets/gameImgs/img7.jpeg";
import img8 from "./assets/gameImgs/img8.jpeg";
import img9 from "./assets/gameImgs/img9.jpeg";
import img10 from "./assets/gameImgs/img10.jpeg";

import PlayButton from "./components/PlayButton.jsx";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import { useState } from "react";
import './styles/App.css'

function App() {
    const neutralText="Memory game! Click on one image to gain a point, but don't click it again or the game is lost!";
    const winText="You won! ACAne is proud of you!";
    const loseText="You lost! ACAne is sad now :(";
    const allImages = [
        {
            image: img1,
            text: "Hunch Gray",
            isAlreadyClicked: false
        },
        {
            image: img2,
            text: "Study Me",
            isAlreadyClicked: false
        },
        {
            image: img3,
            text: "Zanki",
            isAlreadyClicked: false
        },
        {
            image: img4,
            text: "Inside Joke",
            isAlreadyClicked: false
        },
        {
            image: img5,
            text: "Darken",
            isAlreadyClicked: false
        },
        {
            image: img6,
            text: "Kira Killer",
            isAlreadyClicked: false
        },
        {
            image: img7,
            text: "Mirror Tune",
            isAlreadyClicked: false
        },
        {
            image: img8,
            text:"Byoushin Wo Kamu",
            isAlreadyClicked: false
        },
        {
            image: img9,
            text:"Kan Saete Kuyashiiwa",
            isAlreadyClicked: false
        },
        {
            image: img10,
            text:"Konna Koto Sudou",
            isAlreadyClicked: false
        }
    ];
    const [headerText, setHeaderText] = useState(neutralText); // eslint-disable-line no-unused-vars
    const [headerColor, setHeaderColor] = useState("#9333ea"); // eslint-disable-line no-unused-vars
    const [buttonsDisabled, setButtonsDisabled] = useState(false); // Disable buttons at the start
    const [interactionAllowed, setInteractionAllowed] = useState(false); // Disable pointer events at the start
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [images, setImages] = useState(allImages.slice(0, 5));

    function setDifficulty(difficulty) {
        setHighScore(0);
        if (difficulty === 0) {
            setImages(allImages.slice(0, 5));
        } else if (difficulty === 1) {
            setImages(allImages.slice(0, 7));
        } else if (difficulty === 2) {
            setImages(allImages);
        }
    }
    function shuffleArray(originalArray) {
        let array = originalArray.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function checkVictory(img) {
        if (img.isAlreadyClicked) {
            setHeaderText(loseText);
            setHeaderColor("#ff0000");
            setTimeout(() => {
                resetGame();
            }, 1001);
        } else {
            img.isAlreadyClicked = true;
            setCurrentScore(prevScore => prevScore + 1);
            if (currentScore >= highScore) {
                setHighScore(prevScore => prevScore + 1);
            }
            if (currentScore === images.length - 1) {
                setHeaderText(winText);
                setHeaderColor("#00ff00");
                setTimeout(() => {
                    resetGame();
                }, 1001);
            }
        }
    }
    function resetGame() {
        setCurrentScore(0);
        setImages(shuffleArray(images));
        images.forEach(img => img.isAlreadyClicked = false);
        setButtonsDisabled(false);
        setHeaderText(neutralText);
        setHeaderColor("#9333ea");
        setInteractionAllowed(false);
    }

    function shuffle(image) {
        checkVictory(image);
        setInteractionAllowed(false); // Disable pointer events at the start
        setIsFlipped(prevIsFlipped => !prevIsFlipped); // Flip it immediately

        setTimeout(() => {
            const shuffledImages = shuffleArray(images);
            setImages(shuffledImages);
        }, 500);

        setTimeout(() => {
            setIsFlipped(prevIsFlipped => !prevIsFlipped);
            setInteractionAllowed(true); // Re-enable pointer events after flip is complete
        }, 1000);
    }

  return (
    <>
      <Header
          currentScore={currentScore}
          highScore={highScore}
          text={headerText}
          color={headerColor}
      />
      <Game
          images={images}
          onClick={shuffle}
          interactionAllowed={interactionAllowed}
          isFlipped={isFlipped}
      />
        <div className='footer'>
            <PlayButton
                text='Play'
                onClick={() => {
                    setInteractionAllowed(true);
                    setButtonsDisabled(true);
                    }
                }
                isDisabled={buttonsDisabled}
            />
            <div className='difficulties'>
                <PlayButton text='Easy' onClick={() => setDifficulty(0)} isDisabled={buttonsDisabled}/>
                <PlayButton text='Medium' onClick={() => setDifficulty(1)} isDisabled={buttonsDisabled}/>
                <PlayButton text='Hard' onClick={() => setDifficulty(2)} isDisabled={buttonsDisabled}/>
            </div>
        </div>
    </>
  )
}

export default App
