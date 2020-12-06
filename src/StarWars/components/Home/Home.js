import React from 'react'
import Films from './Films'
import "./Home.css"

function Home() {
    return (
        <div className = "home">
            <header className="header">
                <img  className = "bgImg" src = "https://media.giphy.com/media/3ohhwi8j3zjpDMhvxK/giphy.gif" alt="Star Wars"/> 
                <img  className = "logo" src = "https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" alt="Star Wars"/> 
            </header>
            <Films />
        </div>
    )
}

export default Home
