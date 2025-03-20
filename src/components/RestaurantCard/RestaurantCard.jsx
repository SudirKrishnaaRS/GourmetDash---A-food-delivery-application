import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
        alt="pizza"
      />
      <h2 className="card-title">Onesta Pizzeria</h2>
      <div className="rattings">4.5 Stars</div>
      <div className="eta">35 Mins</div>
      <div className="cusine">Italian, Gourmet</div>
    </div>
  );
};

export default RestaurantCard;
