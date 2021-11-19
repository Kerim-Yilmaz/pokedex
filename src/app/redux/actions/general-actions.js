import axios from "axios";
import {store} from '../createStore';

const {dispatch}=store;

export const get = ({
    url,
    params,
    type,
})=>dispatch({type,payload:axios.get(url,{params}).then(res=>res.data)})

export const clearPokeData = (type)=>{dispatch({type:type,payload:null});console.log('dispact')}