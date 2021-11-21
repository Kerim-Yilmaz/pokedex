import { combineReducers } from "redux";
import ListReducer from './reducers/ListReducer'
import FavReducer from './reducers/FavReducer'

const RootReducer = combineReducers({
    ListReducer,
    FavReducer,
})

export default RootReducer