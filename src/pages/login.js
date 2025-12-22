import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "@mui/material/Button"
import { CircularProgress, Grid, Paper } from "@mui/material"
import { grey } from "@mui/material/colors"
import Box from "@mui/material/Box"

import UserInput from "../components/user-input"
import PasswordInput from "../components/password-input"
import { authSelector, login, register } from "../slice/auth"

const initialState = {
  username: "",
  password: ""
}

const Login = () => {

  const { isLoading, error } = useSelector(authSelector)

  const loading = <Grid container direction="column" sx={{ padding: 4, alignItems: 'center' }}>
    <Grid>
      <CircularProgress />
    </Grid>
  </Grid>

  const dispatch = useDispatch()
  const [payload, setPayload] = useState(initialState)
  const handleUserChanged = e => setPayload({ ...payload, username: e.target.value })
  const handlePasswordChanged = e => setPayload({ ...payload, password: e.target.value })
  const handleEnterKeyPress = e => e.code === "Enter" && dispatch(login(payload))

  const loginForm = <Grid container direction="column" sx={{ gap: 2 }} onKeyDown={handleEnterKeyPress}>
    <Grid>
      <h2 align="center">Minesweeper 💣</h2>
    </Grid>

    <Grid>
      <UserInput value={payload.username} onChange={handleUserChanged} focused />
    </Grid>
    <Grid>
      <PasswordInput value={payload.password} onChange={handlePasswordChanged} />
    </Grid>

    <Box sx={{ color: 'error.main', textAlign: 'center' }}>
      {error}
    </Box>

    <Grid container sx={{ justifyContent: 'space-between' }}>
      <Grid>
        <Button onClick={_ => dispatch(register(payload))}>
          Register
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={_ => dispatch(login(payload))}>
          Login
        </Button>
      </Grid>
    </Grid>
  </Grid>

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: grey[100]
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, width: '30%' }}>
        {isLoading ? loading : loginForm}
      </Paper>
    </Box>
  )
}

export default Login
