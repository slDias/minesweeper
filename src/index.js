import { Provider } from "react-redux"
import { render } from "react-dom"
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import App from "./app"
import gameReducer from "./slice/game"
import authReducer from "./slice/auth"
import "./style.css"

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer
})

const store = configureStore({ reducer: rootReducer })

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(rootElement, document.getElementById("root"))
