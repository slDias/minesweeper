import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";

import { boardSelector, GAME_STATUS, resetGame } from "../slice/game";
import { userSelector, logout, updateScore } from "../slice/user";
import Tile from "../components/tile";
import ToolSelector from "../components/tool-selector";
import { useEffect } from "react";

const GamePlatform = () => {
  const { tileBoard, gameStatus, moves } = useSelector(boardSelector);
  const { user, wins, losses, isLoading } = useSelector(userSelector);
  const dispatch = useDispatch();

  const GameBoard = () =>
    tileBoard.map((rowOfTiles, y) => (
      <div key={y}>{<RowOfTiles tileDataList={rowOfTiles} y={y} />}</div>
    ));

  const RowOfTiles = ({ tileDataList, y }) =>
    tileDataList.map((tileData, x) => (
      <Tile tileData={tileData} positionX={x} positionY={y} key={[x, y]} />
    ));

  useEffect(() => {
    if (gameStatus !== GAME_STATUS.PLAYING)
      dispatch(updateScore({ isWin: gameStatus === GAME_STATUS.WIN }));
  }, [gameStatus, dispatch]);

  const game_status_label = {
    [GAME_STATUS.PLAYING]: "Make your next move.",
    [GAME_STATUS.WIN]: "You win!",
    [GAME_STATUS.LOSS]: "You lose.",
  };

  const onLogout = () => {
    dispatch(resetGame());
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: grey[100],
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container sx={{ alignItems: "center", mb: 2 }}>
          <Grid>
            <IconButton onClick={onLogout}>
              <LogoutIcon />
            </IconButton>
          </Grid>
          <Grid flexGrow={1} sx={{ verticalAlign: "center" }}>
            <Typography variant="h5" component="div" align="center">
              {game_status_label[gameStatus]}
            </Typography>
          </Grid>
          <Grid>
            <IconButton onClick={() => dispatch(resetGame())} component="span">
              <ReplaySharpIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container>
          <ToolSelector />
          <Grid
            flexGrow={1}
            container
            sx={{
              textAlign: "center",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            {isLoading ? (
              "saving..."
            ) : (
              <>
                <Grid>Wins: {wins}</Grid>
                <Grid>Losses: {losses}</Grid>
              </>
            )}
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 1 }}>
          <GameBoard />
        </Grid>

        <Grid flexGrow={1} sx={{ justifyContent: "space-between" }} container>
          <Grid>User: {user}</Grid>
          <Grid>Moves made: {moves}</Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default GamePlatform;
