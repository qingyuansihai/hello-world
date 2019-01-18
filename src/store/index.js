import { createStore, combineReducers } from "redux"
import navbarReducer from "./Reducers/navbarReducer"
import footerbarReducer from "./Reducers/footerbarReducer"
const reducer = combineReducers({
    navbarReducer,
    footerbarReducer
})
const store = createStore(reducer);
export default store;