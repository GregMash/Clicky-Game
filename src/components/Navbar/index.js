import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="row">
            <nav className="nav">
                <a href="/" className="nav-item">Clicky Game</a>
                <h3 className="nav-item">Click any image to begin</h3>
                <h2 className="nav-item">Score: {props.score} | High Score: {props.highScore}</h2>
            </nav>
        </div>
    );
};

export default Navbar;