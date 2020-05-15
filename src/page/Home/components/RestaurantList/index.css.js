import styled from "styled-components";

import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

export const RestaurantCard = {
  Card: styled(Card)`
    width: 24%;
    margin-bottom: 10px;
  `,
  CardMedia: styled(CardMedia)`
    padding-top: 56.25%;
    height: 0;
  `,
};

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1%;
`;
