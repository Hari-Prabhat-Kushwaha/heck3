import counterReducer from "./counter";
import loggedReducer from "./islogged";
import store from "./store";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer,
    loggedReducer,
    stores:store
})

export default rootReducer;