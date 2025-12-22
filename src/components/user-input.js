import { TextField } from "@mui/material"

const UserInput = props => (
  <TextField value={props.value} label="User" onChange={props.onChange} fullWidth autoFocus={props.focused} />
)

export default UserInput
