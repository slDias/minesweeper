import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import App from "./app";
import gameReducer from "./slice/game";
import userReducer from "./slice/user";
import "./style.css";

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

const store = configureStore({ reducer: rootReducer });
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
