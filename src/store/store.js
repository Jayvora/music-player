import { configureStore } from "@reduxjs/toolkit";
import player from "./player";

const reducer = {
  player,
};

const store = configureStore({
  reducer,
});

export default store;
