import React from "react";
import "./Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        Restaurants
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
