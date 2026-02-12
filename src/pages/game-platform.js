import { Grid } from "@mui/material";

import ToolSelector from "../components/tool-selector";
import TileBoard from "../components/tileBoard/tileBoard";
import ResultStats from "../components/result-stats";
import UsernameLabel from "../components/username-label";
import MovesCounter from "../components/moves-counter";
import PlatformHeader from "../components/platform-header";
import useGamePlatform from "../hooks/useGamePlatform.hook";

const GamePlatform = () => {
  const {
    tileBoardHook,
    movesCounterHook,
    usernameLabelHook,
    resultStatsHook,
    headerHook,
  } = useGamePlatform();

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      size={{ xs: 12 }}
    >
      <Grid
        boxShadow={2}
        bgcolor={"white"}
        p={2}
        size={{ xs: 12, sm: 10, md: 7, lg: 5 }}
      >
        <PlatformHeader hook={headerHook} />
        {/* todo: replace with:
          <Grid>
            <LogoutButton/>
            <GameStatusLabel/>
            <ResetGameButton/>
          </Grid>*/}

        <Grid container>
          <ToolSelector />
          <ResultStats hook={resultStatsHook} />
        </Grid>

        <Grid
          size={12}
          container
          sx={{ mt: 1 }}
          overflow={"scroll"}
          justifyContent={"center"}
        >
          <TileBoard hook={tileBoardHook} />
        </Grid>

        <Grid flexGrow={1} sx={{ justifyContent: "space-between" }} container>
          <UsernameLabel hook={usernameLabelHook} />
          <MovesCounter hook={movesCounterHook} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GamePlatform;
