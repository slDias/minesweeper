import React, { useState } from "react"
import UserInput from "../components/user-input"
import PasswordInput from "../components/password-input"
import { useDispatch, useSelector } from "react-redux"
import { authSelector, login, register } from "../slice/auth"
import Button from '@mui/material/Button'
import { CircularProgress, Grid, Paper } from "@mui/material"
import Typography from '@mui/material/Typography'
import { grey } from "@mui/material/colors"
import Box from '@mui/material/Box'


const initialState = {
    username: "",
    password: ""
}

const Login = () => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(authSelector)
    const [payload, setPayload] = useState(initialState)

    // if (loading) {
    //     return <div>loading...</div>
    // }

    return (
        <Typography component={Box}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: grey[100]
            }}
        >
            <Paper elevation={3} sx={{ padding: 2, width: '30%' }}>
                { loading ? (
                <Grid container direction="column" sx={{ padding: 4, alignItems: 'center' }}>
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>) : (
                    <Grid container direction="column" sx={{ gap: 2 }}>
                        <Grid item>
                            <h2 align="center">Minesweeper 💣</h2>
                        </Grid>
                        <Grid item>
                            <UserInput value={payload.username} onChange={e => setPayload({ ...payload, username: e.target.value })}></UserInput>
                        </Grid>
                        <Grid item>
                            <PasswordInput value={payload.password} onChange={e => setPayload({ ...payload, password: e.target.value })}></PasswordInput>
                        </Grid>
                        <Box sx={{ color: 'error.main', textAlign: 'center' }}>{error}</Box>
                        <Grid container sx={{ justifyContent: 'space-between' }}>
                            <Grid item>
                                <Button onClick={_ => dispatch(register(payload))}>Register</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={_ => dispatch(login(payload))}>Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </Typography>
    )
}

export default Login