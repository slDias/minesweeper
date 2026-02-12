import { useSelector } from "react-redux";
import { boardSelector } from "../../slice/game";

const useTileBoardHook = () => {
  const { tileBoard } = useSelector(boardSelector);

  return {
    tileBoard,
  };
};

export default useTileBoardHook;
