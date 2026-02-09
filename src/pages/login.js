import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { CircularProgress, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import UserInput from "../components/user-input";
import PasswordInput from "../components/password-input";
import { userSelector, login, register } from "../slice/user";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const { isLoading, error } = useSelector(userSelector);

  const loading = (
    <Grid
      container
      direction="column"
      sx={{ padding: 4, alignItems: "center" }}
    >
      <Grid>
        <CircularProgress />
      </Grid>
    </Grid>
  );

  const dispatch = useDispatch();
  const [payload, setPayload] = useState(initialState);
  const handleUserChanged = (e) =>
    setPayload({ ...payload, username: e.target.value });
  const handlePasswordChanged = (e) =>
    setPayload({ ...payload, password: e.target.value });
  const handleEnterKeyPress = (e) =>
    e.code === "Enter" && dispatch(login(payload));

  const loginForm = (
    <Grid
      container
      spacing={2}
      direction="column"
      onKeyDown={handleEnterKeyPress}
    >
      <Grid>
        <h2 align="center">Minesweeper 💣</h2>
      </Grid>

      <Grid>
        <UserInput
          value={payload.username}
          onChange={handleUserChanged}
          focused
        />
      </Grid>
      <Grid>
        <PasswordInput
          value={payload.password}
          onChange={handlePasswordChanged}
        />
      </Grid>

      <Box sx={{ color: "error.main", textAlign: "center" }}>{error}</Box>

      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid>
          <Button onClick={(_) => dispatch(register(payload))}>Register</Button>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={(_) => dispatch(login(payload))}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container size={12} alignItems={"center"} justifyContent={"center"}>
      <Grid
        boxShadow={1}
        size={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }}
        p={2}
        bgcolor={"white"}
      >
        {isLoading ? loading : loginForm}
      </Grid>
    </Grid>
  );
};

export default Login;
