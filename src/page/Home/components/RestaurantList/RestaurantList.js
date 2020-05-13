import React from "react";
import RestaurantCard from "./RestaurantCard";

import { List } from "./index.css";

const RestaurantList = () => {
  const table = [1, 2, 3, 4, 5, 6];

  const list = table.map((el) => {
    return <RestaurantCard />;
  });
  return <List>{list}</List>;
};

export default RestaurantList;
