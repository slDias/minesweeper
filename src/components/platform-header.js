import { Grid } from "@mui/material";
import GameStatusLabel from "./game-status-label";
import LogoutButton from "./logout-button";
import ResetGameButton from "./reset-game-button";
import useLogoutButton from "./logout-button.hook";
import useGameStatusLabel from "./game-status-label.hook";
import useResetGameButton from "./reset-game-button.hook";

const PlatformHeader = ({ hook, ...props }) => {
  const logoutButtonHook = useLogoutButton();
  const gameStatusLabelHook = useGameStatusLabel();
  const resetGameButtonHook = useResetGameButton();
  return (
    <Grid container size={{ xs: 12 }} sx={{ alignItems: "center", mb: 2 }}>
      <LogoutButton hook={logoutButtonHook} />
      <GameStatusLabel hook={gameStatusLabelHook} />
      <ResetGameButton hook={resetGameButtonHook} />
    </Grid>
  );
};

export default PlatformHeader;
