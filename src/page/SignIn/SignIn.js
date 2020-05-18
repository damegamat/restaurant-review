import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserToken } from "data/reducers/auth/selector";
import axios from "data/axios";

import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@material-ui/core";

const SignIn = () => {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const local = useLocation();
  const dispatch = useDispatch();
  const hash = local.search.split("=")[1];
  const token = useSelector(getUserToken);

  useEffect(() => {
    if (hash !== "" && hash !== undefined) {
      axios.user.axiosUserActive(hash);
    }
  });

  const onSubmit = (data) => {
    dispatch(axios.auth.axiosAuth(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Controller
            as={
              <TextField
                label="Email Address"
                margin="normal"
                type="email"
                variant="outlined"
                fullWidth
                inputProps={{ style: { textAlign: "center" } }}
              />
            }
            name="email"
            control={control}
            defaultValue=""
          />
          <Controller
            as={
              <TextField
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                fullWidth
                inputProps={{ style: { textAlign: "center" } }}
              />
            }
            name="password"
            control={control}
            defaultValue=""
          />

          <Grid container justify="center" alignItems="center" item xs>
            <Grid item xs={6}>
              <Button
                fullWidth
                type="submit"
                variant="outlined"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default SignIn;
