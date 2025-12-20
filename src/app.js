import { useSelector } from "react-redux"
import { authSelector } from "./slice/auth"
import { Box } from "@mui/material"

import GamePlatform from "./pages/game-platform"
import Login from "./pages/login"


const App = () => {

  const { user } = useSelector(authSelector)

  return <Box sx={{width: "100%", height: "100%"}}>
    {user ? <GamePlatform></GamePlatform> : <Login></Login>}
  </Box>
}

export default App
