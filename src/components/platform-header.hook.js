import { useDispatch, useSelector } from "react-redux";
import { boardSelector, resetGame, GAME_STATUS } from "../slice/game";
import { logout } from "../slice/user";

const GAME_STATUS_LABEL = {
  [GAME_STATUS.PLAYING]: "Make your next move.",
  [GAME_STATUS.WIN]: "You win!",
  [GAME_STATUS.LOSS]: "You lose.",
};

const usePlatformHeader = () => {
  const { gameStatus } = useSelector(boardSelector);
  const dispatch = useDispatch();

  let gameStatusLabel = GAME_STATUS_LABEL[gameStatus];

  const onLogout = () => {
    dispatch(resetGame());
    dispatch(logout());
  };

  const onResetGame = () => dispatch(resetGame());

  return {
    gameStatusLabel,
    onLogout,
    onResetGame,
  };
};

export default usePlatformHeader;
