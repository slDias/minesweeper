import { Grid, Stack } from "@mui/material";
import Tile from "../tile";

const TileBoard = ({ hook, ...props }) => {
  return (
    <Stack>
      {hook.tileBoard.map((rowOfTiles, y) => (
        <Grid container overflow={"auto"} columns={10} wrap="nowrap" key={y}>
          {rowOfTiles.map((tileData, x) => (
            <Tile
              tileData={tileData}
              positionX={x}
              positionY={y}
              key={[x, y]}
            />
          ))}
        </Grid>
      ))}
    </Stack>
  );
};

export default TileBoard;
