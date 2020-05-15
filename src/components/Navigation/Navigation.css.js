import styled from "styled-components";

import { Toolbar } from "@material-ui/core";

export const Navigation = {
  Toolbar: styled(Toolbar)`
    display: flex;
    justify-content: space-between;
  `,
  Nav: styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
  `,
  Item: styled.li`
    color: white;
    & a {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      transition: 0.2s;
      &:hover {
        color: black;
        transform: scale(1.1);
      }
    }
  `,
};
