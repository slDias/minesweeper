import { TextField } from "@mui/material"

const PasswordInput = props => (
  <TextField
    value={props.value}
    label="Password"
    type="password"
    onChange={props.onChange}
    fullWidth
  />
)

export default PasswordInput
