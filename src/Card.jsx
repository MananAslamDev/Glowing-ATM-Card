import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <div className="ContentWrapper">
        <div className="cardChip"></div>
        <div className="cardIcon"></div>
      </div>
      <div className="ContentWrapper2">
        <div className="cardNumber">**** **** **** 1234</div>
        <div className="ContentWrapper3">
          <div className="cardName">M Manan Aslam</div>
          <div className="cardValidity">Valid Thru: 12/28</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
