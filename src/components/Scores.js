import React from "react";


const scores = props => (

    <div className="navBar">

        <nav className="navbar navbar-dark bg-danger fixed-top">
            <span className="navbar-brand mb-0 h1"><strong>Clicky Game</strong></span>
            <span className="navbar-brand mb-0 h1">Score: {props.score}</span>
            <span className="navbar-brand mb-0 h1">High Score: {props.highscore}</span>
            <span className="navbar-brand mb-0 h1">{props.message}</span>
        </nav>
  
    </div>


)
export default scores;