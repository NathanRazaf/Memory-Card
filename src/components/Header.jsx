import '../styles/Header.css'
// eslint-disable-next-line react/prop-types
function Header({currentScore, highScore, text, color}) {
    return (
        <header>
            <h1><span id='ztmy'>ZUTOMAYO</span> Memory Game</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 id='advice' style={{color}}>{text}</h2>
            <div className='scores'>
                <h2>Current Score: {currentScore}</h2>
                <h2>High Score: {highScore}</h2>
            </div>
        </header>
    )
}

export default Header