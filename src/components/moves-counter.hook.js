import { useSelector } from "react-redux";
import { boardSelector } from "../slice/game";

const useMovesCounter = () => {
  const { moves } = useSelector(boardSelector);
  return { moves };
};

export default useMovesCounter;
