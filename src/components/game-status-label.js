import { Grid, Typography } from "@mui/material";

const GameStatusLabel = ({ hook, ...props }) => {
  return (
    <Grid flexGrow={1} sx={{ verticalAlign: "center" }}>
      <Typography variant="h5" component="div" align="center">
        {hook.gameStatusLabel}
      </Typography>
    </Grid>
  );
};

export default GameStatusLabel;
