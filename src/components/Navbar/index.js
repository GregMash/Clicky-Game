import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="row">
            <nav className="nav">
                <a href="/" className="nav-item">Clicky Game</a>
                <h4 className="nav-item">Click any image to begin</h4>
                <h2 className="nav-item">Score: {props.score}</h2>
                <h3 className="nav-item">High Score: {props.highScore}</h3>
            </nav>
        </div>
    );
};

export default Navbar;