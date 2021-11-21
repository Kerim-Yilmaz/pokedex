import { CAUGHT_POKEMON, FAV_POKEMON } from "../actions/FavActionTypes";


const initialState = {
    favPokemons:{
        data:[],
    },
    caughtPokemons:{
        data:[],
    }
}




const FavReducer = (state=initialState,action)=>{
    switch (action.type) {
        case FAV_POKEMON:
            return{
                ...state,
                favPokemons:{
                    data:action.payload
                }
            }
        case CAUGHT_POKEMON:
            return{
                ...state,
                caughtPokemons:{
                    data:action.payload
                }
            }
        default:
            return state;
    }

}

export default FavReducer