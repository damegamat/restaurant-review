import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { RestaurantCard as S } from "./index.css";

export default function RestaurantCard() {
  return (
    <S.Card>
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
