import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Navigation as S } from "./Navigation.css";

export default function Navigation({ items }) {
  let history = useHistory();

  const item = items.map((el) => {
    return (
      <S.Item>
        <Link to={el.path}>{el.component}</Link>
      </S.Item>
    );
  });

  const handleClick = () => {
    history.push("/signin");
  };
  return (
    <AppBar position="static">
      <S.Toolbar>
        <S.Nav>
          <S.Item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </S.Item>
          {item}
        </S.Nav>
        <Button onClick={handleClick} color="inherit">
          Logout
        </Button>
      </S.Toolbar>
    </AppBar>
  );
}
