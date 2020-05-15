import React from "react";
import { Grid, Container, Box, Button } from "@material-ui/core";

export default function Details() {
  return (
    <Container maxWidth="md">
      <Box m={2}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid container justify="space-between" item xs>
            <div>The overall average rating</div>
            <div>X</div>
          </Grid>
          <Grid container justify="space-between" item xs>
            <div>The highest rated review</div>
            <div>X</div>
          </Grid>
          <Grid container justify="space-between" item xs>
            <div>The lowest rated review</div>
            <div>X</div>
          </Grid>
          <Grid container justify="center" item xs>
            <div>Latest review</div>
            <Box width="100%">
              <Button>Add New</Button>
              <div>Rate</div>
              <div>2020/05/14</div>
              <div>Super restauracja</div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
