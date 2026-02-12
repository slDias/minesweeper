import { resetGame } from "../slice/game";
import { useDispatch } from "react-redux";

const useResetGameButton = () => {
  const dispatch = useDispatch();

  const onResetGame = () => dispatch(resetGame());

  return {
    onResetGame,
  };
};

export default useResetGameButton;
