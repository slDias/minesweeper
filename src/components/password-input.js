import { TextField } from "@mui/material";
import React from "react";

const PasswordInput = props => {
    return <TextField 
        value={props.value} 
        label="Senha" 
        type="password" 
        onChange={props.onChange} 
        fullWidth
    />
}

export default PasswordInput