import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Avatar,
} from "@material-ui/core";

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
