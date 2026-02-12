import { useSelector } from "react-redux";
import { boardSelector, GAME_STATUS } from "../slice/game";

const GAME_STATUS_LABEL = {
  [GAME_STATUS.PLAYING]: "Make your next move.",
  [GAME_STATUS.WIN]: "You win!",
  [GAME_STATUS.LOSS]: "You lose.",
};

const useGameStatusLabel = () => {
  const { gameStatus } = useSelector(boardSelector);

  let gameStatusLabel = GAME_STATUS_LABEL[gameStatus];
  return {
    gameStatusLabel,
  };
};

export default useGameStatusLabel;
