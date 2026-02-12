import { useDispatch, useSelector } from "react-redux";
import { boardSelector, GAME_STATUS } from "../slice/game";
import { updateScore } from "../slice/user";
import { useEffect } from "react";
import useTileBoardHook from "../components/tileBoard/useTileBoard.hook";
import usePlatformHeader from "../components/platform-header.hook";
import useResultStats from "../components/result-stats.hook";
import useUsernameLabel from "../components/username-label.hook";
import useMovesCounter from "../components/moves-counter.hook";

const useGamePlatform = () => {
  const resultStatsHook = useResultStats();
  const tileBoardHook = useTileBoardHook();
  const headerHook = usePlatformHeader();
  const usernameLabelHook = useUsernameLabel();
  const movesCounterHook = useMovesCounter();

  const { gameStatus } = useSelector(boardSelector);
  const dispatch = useDispatch();

  // todo move into resultStats
  useEffect(() => {
    if (gameStatus !== GAME_STATUS.PLAYING)
      dispatch(updateScore({ isWin: gameStatus === GAME_STATUS.WIN }));
  }, [gameStatus, dispatch]);

  return {
    tileBoardHook,
    movesCounterHook,
    usernameLabelHook,
    resultStatsHook,
    headerHook,
  };
};

export default useGamePlatform;
