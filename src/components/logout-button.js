import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, IconButton } from "@mui/material";

const LogoutButton = ({ hook, ...props }) => (
  <Grid>
    <IconButton onClick={hook.onLogout}>
      <LogoutIcon />
    </IconButton>
  </Grid>
);

export default LogoutButton;
