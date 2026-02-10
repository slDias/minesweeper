import { TextField } from "@mui/material";

const UserInput = ({ hook, ...props }) => {
  return (
    <TextField
      value={hook.value}
      label="User"
      onChange={(e) => hook.onUsernameChange(e.target.value)}
      fullWidth
      autoFocus={props.focused}
    />
  );
};

export { UserInput };
