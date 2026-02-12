import { Grid } from "@mui/material";

const MovesCounter = ({ hook, ...props }) => (
  <Grid>Moves made: {hook.moves}</Grid>
);

export default MovesCounter;
