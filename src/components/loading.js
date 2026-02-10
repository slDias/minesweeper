import { Grid, CircularProgress } from "@mui/material";

const Loading = (props) => (
  <Grid container direction="column" p={4} alignItems="center">
    <Grid>
      <CircularProgress />
    </Grid>
  </Grid>
);

export default Loading;
