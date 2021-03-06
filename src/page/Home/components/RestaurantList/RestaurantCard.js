import React from "react";
import { useHistory } from "react-router-dom";

import { CardHeader, IconButton, Avatar } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { RestaurantCard as S } from "./index.css";

export default function RestaurantCard({ data = { id: 1 } }) {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/details/` + data.id);
  };
  return (
    <S.Card onClick={handleClick}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">4.6</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <S.CardMedia image="/logo192.png" title="restaurant" />
    </S.Card>
  );
}
