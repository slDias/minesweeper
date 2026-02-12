import { useSelector } from "react-redux";
import { userSelector } from "../slice/user";

const useResultStats = () => {
  const { wins, losses, isLoading } = useSelector(userSelector);
  return {
    wins,
    losses,
    isLoading,
  };
};

export default useResultStats;
