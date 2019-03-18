import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" id={props.id}  onClick={props.cardClick}>
        <div className="img-container" id={props.id}>
        <img id={props.id} alt={props.name} src={props.image} />
        </div>
        <div className="char-name" id={props.id}>{props.name}</div>
        </div>
    );
};

export default Card;