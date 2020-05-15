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

export default function Register() {
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
                label="First Name"
                margin="normal"
                type="text"
                variant="outlined"
                fullWidth
              />
            }
            name="firstName"
            control={control}
            defaultValue=""
          />
          <Controller
            as={
              <TextField
                label="Last Name"
                margin="normal"
                type="text"
                variant="outlined"
                fullWidth
              />
            }
            name="lastName"
            control={control}
            defaultValue=""
          />
          <Controller
            as={
              <TextField
                label="Email Address"
                margin="normal"
                type="email"
                variant="outlined"
                fullWidth
              />
            }
            name="email"
            control={control}
            defaultValue=""
          />

          <Grid container justify="space-between" item xs>
            <Controller
              as={
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="admin"
                />
              }
              name="admin"
              value="test"
              control={control}
              defaultValue={false}
            />
            <Grid container justify="center" alignItems="center" item xs>
              <Grid item xs="6">
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
        </Grid>
      </Container>
    </form>
  );
}
