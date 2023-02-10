import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
    boardSelector, 
    resetGame, 
    toggleShovel,
    toggleFlagBomb, 
    toggleFlagUnknown, 
    TOOLS
} from "./slice/game"
import FlagIcon from '@mui/icons-material/Flag'
import PanToolAltIcon from '@mui/icons-material/PanToolAlt'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { authSelector } from "./slice/auth"
import Tile from "./components/tile"
import Login from "./pages/login"
import { 
    Box, 
    Grid, 
    IconButton, 
    Paper, 
    ToggleButton, 
    ToggleButtonGroup, 
    Typography 
} from "@mui/material"
import { grey } from "@mui/material/colors"
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp'


const App = () => {

    const { tileBoard, gameStatus, moves, currentTool } = useSelector(boardSelector)
    const { user } = useSelector(authSelector)
    const dispatch = useDispatch()

    const renderBoardLine = (tileData, positionX, positionY) => {
        return <Tile tileData={tileData} positionX={positionX} positionY={positionY} 
                key={[positionX, positionY]} />
    }

    const GameBoard = () => {
        return (
            <Typography component={Box}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: grey[100]
                }}
            >
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Grid container sx={{
                        alignItems: 'center',
                        mb: 2
                    }}>
                        <Grid item flexGrow={1} sx={{ verticalAlign: 'center' }}>
                            {/* <Box align="center" sx={{ my: 2 }}>{gameStatus}</Box> */}
                            <Typography variant="h5" component="div" align="center">
                                {gameStatus}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => dispatch(resetGame())} aria-label="Reset Game" component="span">
                                <ReplaySharpIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <ToggleButtonGroup
                        value={currentTool}
                        exclusive
                        aria-label="Tool"
                    >
                        <ToggleButton value={TOOLS.SHOVEL} onClick={_ => dispatch(toggleShovel())} aria-label="Shovel">
                            <PanToolAltIcon />
                        </ToggleButton>
                        <ToggleButton value={TOOLS.FLAG_BOMB} onClick={_ => dispatch(toggleFlagBomb())} aria-label="Flag bomb">
                            <FlagIcon />
                        </ToggleButton>
                        <ToggleButton value={TOOLS.FLAG_UNKNOWN} onClick={_ => dispatch(toggleFlagUnknown())} aria-label="Flag Unknown">
                            <QuestionMarkIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    
                    <Grid container sx={{ mt: 1 }}>
                        {tileBoard.map((tileList, i) => (<div key={i}>{tileList.map((tile, j) => renderBoardLine(tile, j, i))}</div>))}
                    </Grid>

                    <Box>Moves made: {moves}</Box>
                </Paper>
            </Typography>
        )
    }

    return <div>
        { user ? <GameBoard></GameBoard> : <Login></Login> }
    </div>
}

export default App