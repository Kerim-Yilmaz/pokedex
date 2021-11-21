import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { clearPokeData, get } from "./general-actions";
import { CLEAR_POKEMON, GET_POKEMON, GET_POKEMON_LIST, GET_POKEMON_SPECIES, GET_POKE_DETAIL } from "./ListActionTypes";




export function usePokemon(){
    const {list,pokemons,pokemonSpecies,pokeDetail}= useSelector((state)=>({
        list:state.ListReducer.list,
        pokemons:state.ListReducer.pokemons,
        pokemonSpecies:state.ListReducer.pokemonSpecies,
        pokeDetail:state.ListReducer.pokeDetail
    }))


    useEffect(() => {
        PokemonList()
        //eslint-disable-next-line
    }, [list])

    const getPokemons =   (params) => {

        clearPokeData({type:CLEAR_POKEMON})
         get({
        url:`https://pokeapi.co/api/v2/pokemon`,
        params:params,
        type:GET_POKEMON_LIST,
        })
    }

    const PokemonList = ()=>{
            list?.data?.results?.map(async res=>
               await get({
                url:`https://pokeapi.co/api/v2/pokemon/${res.name}`,
                type:GET_POKEMON
            }))
        
    }
            


    const PokemonSpecies =  (id)=>get({
        url:`https://pokeapi.co/api/v2/pokemon-species/${id}`,
        type:GET_POKEMON_SPECIES
    })

    const getPokeDetail =(id)=>get({
        url:`https://pokeapi.co/api/v2/pokemon/${id}`,
        type:GET_POKE_DETAIL,
    })

    return{
       pokeDetail, pokemonSpecies ,list,pokemons,getPokemons,PokemonList,PokemonSpecies,getPokeDetail
    }


}