import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, IconButton, Typography } from "@mui/material";

const PlatformHeader = ({ hook, ...props }) => (
  <Grid container size={{ xs: 12 }} sx={{ alignItems: "center", mb: 2 }}>
    <Grid>
      <IconButton onClick={hook.onLogout}>
        <LogoutIcon />
      </IconButton>
    </Grid>
    <Grid flexGrow={1} sx={{ verticalAlign: "center" }}>
      <Typography variant="h5" component="div" align="center">
        {hook.gameStatusLabel}
      </Typography>
    </Grid>
    <Grid>
      <IconButton onClick={hook.onResetGame} component="span">
        <ReplaySharpIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default PlatformHeader;
