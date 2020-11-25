import React from 'react'
import { Search } from 'semantic-ui-react';
import './Header.css'
// import Header from "react-semantic-ui-react";
function Header() {
    const styles = {
    paperContainer: {
        height: 156,
        backgroundImage: `url(${"https://media.giphy.com/media/3ohhwi8j3zjpDMhvxK/giphy.gif"})`,
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',
        marginTop :"20px",
        opacity: "0.5",
        outline: "none",
    }
};
    return (
        <div className="ui segment">
             <header style={styles.paperContainer}>    
        <img  className = "logo" src = "https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" alt="Star Wars"/>   
      </header>
      <Search/>
        </div>
    )
}

export default Header
