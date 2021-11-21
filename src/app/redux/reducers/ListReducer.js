import { 
    CLEAR_LIST, 
    CLEAR_POKEMON, 
    CLEAR_POKEMON_DETAIL, 
    CLEAR_POKEMON_SPECIES, 
    GET_POKEMON_FULFILLED, 
    GET_POKEMON_LIST_FULFILLED, 
    GET_POKEMON_LIST_PENDING, 
    GET_POKEMON_LIST_REJECTED, 
    GET_POKEMON_SPECIES_FULFILLED, 
    GET_POKEMON_SPECIES_PENDING, 
    GET_POKEMON_SPECIES_REJECTED, 
    GET_POKE_DETAIL_FULFILLED, 
    GET_POKE_DETAIL_PENDING, 
    GET_POKE_DETAIL_REJECTED, } from "../actions/ListActionTypes"

const initialState={
    list:{
        data:[],
        isLoading:false,
        error:{}
    },
    pokemons:{
        data:[],
    },
    pokemonSpecies:{
        isLoading:false,
        erorr:{},
        data:{}
    },
    pokeDetail:{
        isLoading:false,
        error:{},
        data:{},
    }


}

const ListReducer  =(state=initialState,action)=>{
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
            console.log('list silme tetiklendi')
            return{
                ...state,
                list:{
                    data:[],
                    isLoading:false,
                    error:{}
                }
            }
       
        case GET_POKEMON_FULFILLED:
            const check=state.pokemons.data.find(res=>res.id===action.payload.id)
                if(!check){
                    return {
                        ...state,
                        pokemons:{
                            data:[...state.pokemons.data,action.payload]
                                 }
                            }
                    }
            return state

        case CLEAR_POKEMON:
            return{
                ...state,
                pokemons:{data:[]}
            }

        case GET_POKEMON_SPECIES_PENDING:
            return{
                ...state,
                pokemonSpecies:{
                    isLoading:true
                }
            }
        case GET_POKEMON_SPECIES_REJECTED:
            return{
                ...state,
                pokemonSpecies:{
                    isLoading:false,
                    error:action.payload
                }
            }
        case GET_POKEMON_SPECIES_FULFILLED:
            return{
                ...state,
                pokemonSpecies:{
                    isLoading:false,
                    data:action.payload
                }
            }
        case CLEAR_POKEMON_SPECIES:
            return{
                ...state,
                pokemonSpecies:{
                    data:{},
                    isLoading:false,
                    error:{}}
            }

        case GET_POKE_DETAIL_PENDING:
            return{
                ...state,
                pokeDetail:{
                    isLoading:true,
                }

            }
        case GET_POKE_DETAIL_REJECTED:
            return{
                ...state,
                pokeDetail:{
                    isLoading:false,
                    error:action.payload
                }
            }
        case GET_POKE_DETAIL_FULFILLED:
            return{
                ...state,
                pokeDetail:{
                    isLoading:false,
                    data:action.payload
                }
            }
        case CLEAR_POKEMON_DETAIL:
            return{
                ...state,
                pokeDetail:{
                    data:{},
                    isLoading:false,
                    error:{}
                }
            }
        default:
            return state
    }
}

export default ListReducer