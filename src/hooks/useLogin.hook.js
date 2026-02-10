import { useUsernameHook, usePasswordHook } from "../components/input";
import { userSelector, login, register } from "../slice/user";
import { useSelector, useDispatch } from "react-redux";

const useLogin = () => {
  const usernameHook = useUsernameHook();
  const passwordHook = usePasswordHook();

  const { isLoading, error } = useSelector(userSelector);
  const dispatch = useDispatch();

  const registerHandler = () => {
    dispatch(
      register({ username: usernameHook.value, password: passwordHook.value }),
    );
  };

  const loginHandler = () => {
    dispatch(
      login({ username: usernameHook.value, password: passwordHook.value }),
    );
  };

  return {
    usernameHook,
    passwordHook,
    isLoading,
    error,
    loginHandler,
    registerHandler,
  };
};

export default useLogin;
