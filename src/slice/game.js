import { createSlice } from "@reduxjs/toolkit";

const boardLength = 10;
const bombsCount = 2;
export const TOOLS = {
  FLAG_BOMB: "TOOL_FLAG_BOMB",
  FLAG_UNKNOWN: "TOOL_FLAG_UNKNOWN",
  SHOVEL: "TOOL_SHOVEL",
};
export const FLAG_BOMB = "FLAG_BOMB";
export const FLAG_UNKNOWN = "FLAG_UNKNOWN";
export const GAME_STATUS = {
  PLAYING: "PLAYING",
  WIN: "WIN",
  LOSS: "LOSS",
};

const makeInitialBoard = () => {
  const tileBoard = new Array(boardLength);
  for (var i = 0; i < boardLength; i++) {
    const boardLine = new Array(boardLength);
    for (let j = 0; j < boardLength; j++) {
      boardLine[j] = {
        value: 0, // 0 is empty, -1 is a bomb, > 0 is the amount of bombs around
        flipped: false,
        positionX: j,
        positionY: i,
        flag: null,
      };
    }
    tileBoard[i] = boardLine;
  }

  return tileBoard;
};

export const initialState = {
  moves: 0,
  tileBoard: makeInitialBoard(),
  gameStatus: GAME_STATUS.PLAYING,
  currentTool: TOOLS.SHOVEL,
};

const getTilesAround = (tileBoard, positionX, positionY) => {
  let tileList = [];
  // up left position
  if (tileBoard[positionY - 1]?.[positionX - 1]) {
    tileList.push(tileBoard[positionY - 1][positionX - 1]);
  }

  // up position
  if (tileBoard[positionY]?.[positionX - 1]) {
    tileList.push(tileBoard[positionY][positionX - 1]);
  }

  // up right position
  if (tileBoard[positionY + 1]?.[positionX - 1]) {
    tileList.push(tileBoard[positionY + 1][positionX - 1]);
  }

  // left position
  if (tileBoard[positionY - 1]?.[positionX]) {
    tileList.push(tileBoard[positionY - 1][positionX]);
  }

  // right position
  if (tileBoard[positionY + 1]?.[positionX]) {
    tileList.push(tileBoard[positionY + 1][positionX]);
  }

  // down left position
  if (tileBoard[positionY - 1]?.[positionX + 1]) {
    tileList.push(tileBoard[positionY - 1][positionX + 1]);
  }

  // down position
  if (tileBoard[positionY]?.[positionX + 1]) {
    tileList.push(tileBoard[positionY][positionX + 1]);
  }

  // down right position
  if (tileBoard[positionY + 1]?.[positionX + 1]) {
    tileList.push(tileBoard[positionY + 1][positionX + 1]);
  }

  return tileList;
};

const fillBoardValues = (tileBoard, initialPositionX, initialPositionY) => {
  let bombsCreated = 0;
  while (bombsCreated !== bombsCount) {
    let positionX = Math.floor(Math.random() * (boardLength - 0) + 0);
    let positionY = Math.floor(Math.random() * (boardLength - 0) + 0);
    const bombTile = tileBoard[positionY][positionX];
    if (
      bombTile.value === -1 ||
      positionX === initialPositionX ||
      positionY === initialPositionY
    ) {
      continue;
    }

    let tilesAround = getTilesAround(tileBoard, positionX, positionY);

    // is it around the initial position?
    let isAroundInitial = tilesAround.some((tile) => {
      return (
        tile.positionX === initialPositionX &&
        tile.positionY === initialPositionY
      );
    });

    if (!isAroundInitial) {
      bombTile.value = -1;
      bombsCreated += 1;
      tilesAround
        .filter((tileAround) => tileAround.value !== -1)
        .forEach((tileAround) => (tileAround.value += 1));
    }
  }
};

const flipZerosInArea = (tileBoard, positionX, positionY) => {
  getTilesAround(tileBoard, positionX, positionY)
    .filter((tileAround) => tileAround.value !== -1 && !tileAround.flipped)
    .map((tileAround) => {
      tileAround.flipped = true;
      return tileAround;
    })
    .filter((tileAround) => tileAround.value === 0)
    .map((tileAround) =>
      flipZerosInArea(tileBoard, tileAround.positionX, tileAround.positionY),
    );
};

const flipAllBombs = (tileBoard) => {
  tileBoard.forEach((tileLine) => {
    tileLine
      .filter((tile) => tile.value === -1)
      .forEach((tile) => {
        tile.flipped = true;
      });
  });
};

const countFlippedTiles = (tileBoard) => {
  let flippedCount = 0;
  tileBoard.forEach((tileLine) => {
    flippedCount += tileLine.filter((tile) => tile.flipped).length;
  });
  return flippedCount;
};

const setCurrentTool = (state, tool) => {
  if (state.currentTool === tool) {
    state.currentTool = TOOLS.SHOVEL;
  } else {
    state.currentTool = tool;
  }
};

const flipTile = (state, selectedTile) => {
  if (selectedTile.flipped) return;
  let positionX = selectedTile.positionX;
  let positionY = selectedTile.positionY;
  if (state.moves === 0) {
    fillBoardValues(state.tileBoard, positionX, positionY);
  }
  if (selectedTile.value === 0) {
    flipZerosInArea(state.tileBoard, positionX, positionY);
  }
  if (selectedTile.flag) return;
  selectedTile.flipped = true;
  state.moves += 1;
};

const flagTile = (state, selectedTile, flag) => {
  if (state.moves === 0) return;
  if (selectedTile.flag === flag) selectedTile.flag = null;
  else selectedTile.flag = flag;
};

const countMatchingFlags = (tileBoard) => {
  let counter = 0;
  tileBoard.forEach((tileLine) => {
    counter += tileLine.filter((tile) => {
      return tile.value === -1 && tile.flag === FLAG_BOMB;
    }).length;
  });

  return counter;
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.tileBoard = makeInitialBoard();
      state.gameStatus = GAME_STATUS.PLAYING; // PLAYING
      state.moves = 0;
      state.currentTool = TOOLS.SHOVEL;
    },
    makeMove: (state, { payload }) => {
      if (state.gameStatus !== GAME_STATUS.PLAYING) return; // PLAYING
      const { positionX, positionY } = payload;
      const selectedTile = state.tileBoard[positionY][positionX];
      switch (state.currentTool) {
        case TOOLS.SHOVEL:
          flipTile(state, selectedTile);
          if (selectedTile.value === -1) {
            state.gameStatus = GAME_STATUS.LOSS;
            flipAllBombs(state.tileBoard);
          }
          break;

        case TOOLS.FLAG_BOMB:
          flagTile(state, selectedTile, FLAG_BOMB);
          break;

        case TOOLS.FLAG_UNKNOWN:
          flagTile(state, selectedTile, FLAG_UNKNOWN);
          break;

        default:
          break;
      }
      const flippedCount = countFlippedTiles(state.tileBoard);
      if (flippedCount === boardLength * boardLength - bombsCount) {
        state.gameStatus = GAME_STATUS.WIN;
      }
      const matchingFlags = countMatchingFlags(state.tileBoard);
      if (matchingFlags === bombsCount) {
        state.gameStatus = GAME_STATUS.WIN;
      }
    },
    toggleShovel: (state) => {
      setCurrentTool(state, TOOLS.SHOVEL);
    },
    toggleFlagBomb: (state) => {
      setCurrentTool(state, TOOLS.FLAG_BOMB);
    },
    toggleFlagUnknown: (state) => {
      setCurrentTool(state, TOOLS.FLAG_UNKNOWN);
    },
  },
});

export const {
  makeMove,
  resetGame,
  toggleShovel,
  toggleFlagBomb,
  toggleFlagUnknown,
} = gameSlice.actions;

export const gameSelector = (positionX, positionY) => (state) =>
  state.game.tileBoard[positionX][positionY];

export const boardSelector = (state) => state.game;

export default gameSlice.reducer;
