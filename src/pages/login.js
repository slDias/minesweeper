import { Grid, Button } from "@mui/material";

import { UserInput, PasswordInput } from "../components/input";
import Loading from "../components/loading";
import useLogin from "../hooks/useLogin.hook";

const Login = () => {
  const {
    usernameHook,
    passwordHook,
    isLoading,
    error,
    loginHandler,
    registerHandler,
  } = useLogin();

  if (isLoading) return <Loading />;

  return (
    <Grid
      boxShadow={1}
      size={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }}
      px={4}
      py={2}
      bgcolor="white"
      onKeyDown={(e) => e.code === "Enter" && loginHandler()}
      container
      gap={2}
      justifyContent="center"
      direction="column"
    >
      <Grid>
        <h2 align="center">Minesweeper 💣</h2>
      </Grid>

      <Grid>
        <UserInput hook={usernameHook} focused />
      </Grid>
      <Grid>
        <PasswordInput hook={passwordHook} />
      </Grid>

      <Grid color="error.main" textAlign="center">
        {error}
      </Grid>

      <Grid container justifyContent="space-between">
        <Grid>
          <Button onClick={(_) => registerHandler()}>Register</Button>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={(_) => loginHandler()}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
