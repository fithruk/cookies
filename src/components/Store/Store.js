import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { calcReducer } from "./CalcReducer/calcReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
