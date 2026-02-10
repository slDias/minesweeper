import { useSelector } from "react-redux";
import { userSelector } from "./slice/user";
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/material";

import GamePlatform from "./pages/game-platform";
import Login from "./pages/login";

const App = () => {
  const { user } = useSelector(userSelector);

  return (
    <Grid
      size={12}
      container
      bgcolor={grey[200]}
      justifyContent={"center"}
      alignContent={"center"}
    >
      {user ? <GamePlatform /> : <Login />}
    </Grid>
  );
};

export default App;
