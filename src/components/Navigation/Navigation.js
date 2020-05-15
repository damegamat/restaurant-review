import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Navigation as S } from "./Navigation.css";

export default function Navigation({ items }) {
  const [pass, setPass] = useState(true);
  const [btnText, setBtnText] = useState("");
  console.log(btnText);
  let history = useHistory();
  const local = useLocation();

  useEffect(() => {
    if (pass) {
      setBtnText("Logout");
    } else {
      if (local.pathname == "/register") {
        setBtnText("Signin");
      } else if (local.pathname == "/signin") {
        setBtnText("Register");
      }
    }
  }, [pass]);

  const item = items.map((el) => {
    return (
      <S.Item>
        <Link to={el.path}>{el.component}</Link>
      </S.Item>
    );
  });

  const handleClick = (btnText) => {
    if (pass) {
      setBtnText("Register");
      history.push("/signin");
      setPass(false);
    } else {
      if (btnText === "Register") {
        setBtnText("Signin");
        history.push("/register");
      } else {
        setBtnText("Register");
        history.push("/signin");
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
