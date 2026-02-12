import { Grid } from "@mui/material";

const UsernameLabel = ({ hook, ...props }) => <Grid>User: {hook.user}</Grid>;

export default UsernameLabel;
