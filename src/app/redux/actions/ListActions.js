import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { clearPokeData, get } from "./general-actions";
import { CLEAR_POKEMON, GET_POKEMON, GET_POKEMON_LIST } from "./ListActionTypes";




export function usePokemon(){
    const {list,pokemons}= useSelector((state)=>({
        list:state.ListReducer.list,
        pokemons:state.ListReducer.pokemons
    }))



    useEffect(() => {
        getir()

        return () => {
            
        }
    }, [])

    useEffect(()=>{
        
        PokemonList()
        
    },[list])
 

    const getir = () => {
        clearPokeData(CLEAR_POKEMON)
        get({
        url:`https://pokeapi.co/api/v2/pokemon`,
        params:{limit:1,offset:0},
        type:GET_POKEMON_LIST
    })}

    const PokemonList = ()=>list.data?.results?.map(res=> 
        get({
            url:`https://pokeapi.co/api/v2/pokemon/${res.name}`,
            type:GET_POKEMON
        })
        )

    return{
        list,pokemons,getir,PokemonList
    }


}