import { Grid } from "@mui/material";

const ResultStats = ({ hook, ...props }) => (
  <Grid
    flexGrow={1}
    container
    sx={{
      textAlign: "center",
      justifyContent: "space-evenly",
      alignContent: "center",
    }}
  >
    {hook.isLoading ? (
      "saving..."
    ) : (
      <>
        <Grid>Wins: {hook.wins}</Grid>
        <Grid>Losses: {hook.losses}</Grid>
      </>
    )}
  </Grid>
);

export default ResultStats;
