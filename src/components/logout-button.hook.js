import { useDispatch } from "react-redux";

import { resetGame } from "../slice/game";
import { logout } from "../slice/user";

const useLogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(resetGame());
    dispatch(logout());
  };

  return {
    onLogout,
  };
};

export default useLogoutButton;
