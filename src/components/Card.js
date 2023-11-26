import React from "react";
import "../css/card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="imageBox">
        <img className="image" src={props.src} alt={props.name}></img>
      </div>
      <div className="specs">
        <h1 className="name">{props.name}</h1>
        <span>Pojemnosc (kg):</span>{" "}
        <span className="specValue">{props.capacity}</span>
        <br></br>
        <span>Wymiary (GxSxW)</span>:{" "}
        <span className="specValue">{props.size}</span>
        <br></br>
        <span>Funkcje:</span>{" "}
        <span className="specValue">{props.functions}</span>
      </div>
      <div className="energy">
        <span>Klasa energetyczna</span>
        <div className="energyLabel">
          <div className="label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="18"
              viewBox="0 0 49 18"
            >
              <path
                d="M0 17V1C0 0.447715 0.447716 0 1 0H42.4648C42.7992 0 43.1114 0.167102 43.2969 0.4453L48.6302 8.4453C48.8541 8.7812 48.8541 9.2188 48.6302 9.5547L43.2969 17.5547C43.1114 17.8329 42.7992 18 42.4648 18H1C0.447715 18 0 17.5523 0 17Z"
                fill="#009949"
              />
              <text
                x="20%"
                y="55%"
                fontSize="12"
                fill="#ffffff"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {props.energy}
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="price">
        <span className="priceTime">
          Cena obowiązuje: {props.priceTimeStart} - {props.priceTimeEnd}
        </span>
        <div className="priceValue">
          <h1>{props.price}</h1>
          <span className="currency">
            00
            <br />
            zł
          </span>
        </div>
      </div>
      <span className="loan">{props.loan}</span>
      <div className="btn">
        <button className="pick" onClick={props.pickProduct}>
          Wybierz
        </button>
      </div>
    </div>
  );
}

export default Card;
