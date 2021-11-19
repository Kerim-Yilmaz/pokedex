import { CLEAR_LIST, CLEAR_POKEMON, GET_POKEMON_FULFILLED, GET_POKEMON_LIST_FULFILLED, GET_POKEMON_LIST_PENDING, GET_POKEMON_LIST_REJECTED, } from "../actions/ListActionTypes"

const initalState={
    list:{
        data:[],
        isLoading:false,
        error:{}
    },
    pokemons:{
        data:[],
    }

}

const ListReducer  =(state=initalState,action)=>{
    switch(action.type){
        case GET_POKEMON_LIST_PENDING:
            return{
                ...state,
                list:{
                    isLoading:true,
                }
            }
        case GET_POKEMON_LIST_FULFILLED:
            return{
                ...state,
                list:{
                    data:action.payload,
                    isLoading:false,
                }
            }
        case GET_POKEMON_LIST_REJECTED:
            return{
                ...state,
                list:{
                    isLoading:false,
                    erorr:action.payload
                }
            }
        case CLEAR_LIST:
            return{
                ...state,
                list:initalState,
            }
       
        case GET_POKEMON_FULFILLED:
            let tradesData = [];
            tradesData=[action.payload,...state.pokemons.data]
            return {
            ...state,
            pokemons:{
                
                data:tradesData
            }
        }

        case CLEAR_POKEMON:
            console.log('tetiklendi')
            return{
                ...state,
                pokemons:{
                    data:[]
                }
            }

        default:
            return state
    }
}

export default ListReducer