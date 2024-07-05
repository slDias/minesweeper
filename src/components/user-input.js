import { TextField } from "@mui/material";
import React from "react";

const UserInput = props => {
    return (
        <TextField value={props.value} label="Usuário" onChange={props.onChange} fullWidth></TextField>
    )
}

export default UserInput