import { useSelector } from "react-redux";
import { userSelector } from "./slice/user";
import { Box } from "@mui/material";

import GamePlatform from "./pages/game-platform";
import Login from "./pages/login";

const App = () => {
  const { user } = useSelector(userSelector);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {user ? <GamePlatform></GamePlatform> : <Login></Login>}
    </Box>
  );
};

export default App;
