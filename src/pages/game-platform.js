import { useDispatch, useSelector } from "react-redux"
import { grey } from "@mui/material/colors"
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp"
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography
} from "@mui/material"

import { boardSelector, resetGame } from "../slice/game"
import Tile from "../components/tile"
import ToolSelector from "../components/tool-selector"


const GamePlatform = () => {

  const { tileBoard, gameStatus, moves } = useSelector(boardSelector)
  const dispatch = useDispatch()

  const GameBoard = () => (
    tileBoard.map((rowOfTiles, y) => (
      <div key={y}>
        {
          <RowOfTiles tileDataList={rowOfTiles} y={y} />
        }
      </div>
    ))
  )

  const RowOfTiles = ({tileDataList, y}) => (
    tileDataList.map((tileData, x) => (
      <Tile
        tileData={tileData}
        positionX={x}
        positionY={y}
        key={[x, y]}
      />
    ))
  )

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: grey[100]
    }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container sx={{ alignItems: 'center', mb: 2}}>
          <Grid flexGrow={1} sx={{ verticalAlign: 'center' }}>
            <Typography variant="h5" component="div" align="center">
              {gameStatus}
            </Typography>
          </Grid>
          <Grid>
            <IconButton onClick={() => dispatch(resetGame())} component="span">
              <ReplaySharpIcon />
            </IconButton>
          </Grid>
        </Grid>

        <ToolSelector />

        <Grid container sx={{ mt: 1 }}>
          <GameBoard />
        </Grid>

        <Box>
          Moves made: {moves}
        </Box>
      </Paper>
    </Box>
  )
}

export default GamePlatform
