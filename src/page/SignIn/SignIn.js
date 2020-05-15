import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@material-ui/core";

export default function SignIn() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = (data) => console.log(data);

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
}
