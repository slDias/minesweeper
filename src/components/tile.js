import { useDispatch } from "react-redux"

import { makeMove, FLAG_UNKNOWN, FLAG_BOMB } from "../slice/game"

const tileRepresentation = {
  "-1": "💣",
  "0": ""
}

const flagRepresentation = {
  [FLAG_BOMB]: "🏴",
  [FLAG_UNKNOWN]: "❓"
}

const Tile = ({ tileData, positionX, positionY }) => {

  const dispatch = useDispatch()

  const renderValue = () => {
    let representation = tileRepresentation[tileData.value]
    return representation === undefined ? tileData.value : representation
  }

  const renderTile = () => {
    let representation = flagRepresentation[tileData.flag]
    return representation === undefined ? "" : representation
  }

  const handleClick = () => {
    dispatch(makeMove({ positionX, positionY }))
  }

  return (
    <div onClick={handleClick} style={{
      border: "solid 1px",
      width: "45px",
      height: "45px",
      textAlign: "center",
      lineHeight: "42px",
      fontSize: "20px",
      "backgroundColor": tileData.flipped ? "#e3e3e3" : "white"
    }}>
      {tileData.flipped ? renderValue() : renderTile()}
    </div>
  )
}

export default Tile
