import { combineReducers } from "redux";
import ListReducer from './reducers/ListReducer'



const RootReducer = combineReducers({
    ListReducer,
})

export default RootReducer