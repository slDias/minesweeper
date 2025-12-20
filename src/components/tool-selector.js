import { useDispatch, useSelector } from "react-redux"
import FlagIcon from "@mui/icons-material/Flag"
import PanToolAltIcon from "@mui/icons-material/PanToolAlt"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"

import {
  boardSelector,
  toggleShovel,
  toggleFlagBomb,
  toggleFlagUnknown,
  TOOLS
} from "../slice/game"


const ToolSelector = () => {
  const { currentTool } = useSelector(boardSelector)
  const dispatch = useDispatch()

  return <ToggleButtonGroup
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
}

export default ToolSelector
