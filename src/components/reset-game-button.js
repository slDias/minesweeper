import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import { Grid, IconButton } from "@mui/material";

const ResetGameButton = ({ hook, ...props }) => (
  <Grid>
    <IconButton onClick={hook.onResetGame} component="span">
      <ReplaySharpIcon />
    </IconButton>
  </Grid>
);

export default ResetGameButton;
