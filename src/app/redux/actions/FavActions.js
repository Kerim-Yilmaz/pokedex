import { useSelector } from "react-redux"
import {store} from '../createStore';
import { FAV_POKEMON } from "./FavActionTypes";

const {dispatch}=store;

export function useFavPokemon(){


    const {favPokemons}= useSelector((state)=>({
        favPokemons:state.FavReducer.favPokemons,

    }))
    const addOrDeleteFavPoke=(data)=>{
        const type=favPokemons?.data.find(res=>res.id===data.id)
        if(!type){
        let getFavPoke =[];
        getFavPoke=[...favPokemons.data,data]
        dispatch({type:FAV_POKEMON,payload:getFavPoke})
        }else{
          let deletePoke= favPokemons?.data.filter(res=>res.id!==data.id)
        dispatch({type:FAV_POKEMON,payload:deletePoke})
        }
    }
    
   

    return{
        favPokemons,addOrDeleteFavPoke,
    }
}