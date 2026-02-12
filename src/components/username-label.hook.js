import { useSelector } from "react-redux";
import { userSelector } from "../slice/user";

const useUsernameLabel = () => {
  const { user } = useSelector(userSelector);

  return { user };
};

export default useUsernameLabel;
