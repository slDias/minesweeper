import { TextField } from "@mui/material";

const PasswordInput = ({ hook, ...props }) => (
  <TextField
    value={hook.value}
    label="Password"
    type="password"
    onChange={(e) => hook.onPasswordChange(e.target.value)}
    fullWidth
  />
);

export { PasswordInput };
