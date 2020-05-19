import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserToken } from "data/reducers/auth/selectors";
import { userLoginAction } from "data/reducers/auth/actions";

import { AppBar, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Navigation as S } from "./Navigation.css";

export default function Navigation({ items }) {
  const token = useSelector(getUserToken);
  const [btnText, setBtnText] = useState("");

  let history = useHistory();
  const local = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setBtnText("Logout");
    } else {
      if (local.pathname == "/register") {
        setBtnText("Signin");
      } else if (local.pathname == "/login") {
        setBtnText("Register");
      }
    }
  }, [token]);

  const item = items.map((el) => {
    return (
      <S.Item>
        <Link to={el.path}>{el.component}</Link>
      </S.Item>
    );
  });

  const handleClick = (btnText) => {
    if (token) {
      setBtnText("Register");
      history.push("/login");
      dispatch(userLoginAction({ data: { token: "" } }));
    } else {
      if (btnText === "Register") {
        setBtnText("Signin");
        history.push("/register");
      } else {
        setBtnText("Register");
        history.push("/login");
      }
    }
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
        <Button onClick={() => handleClick(btnText)} color="inherit">
          {btnText}
        </Button>
      </S.Toolbar>
    </AppBar>
  );
}
