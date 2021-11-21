import { toast } from "react-toastify"




export  function catchPoke(data){
    const getcatchPoke = localStorage.getItem('myPoke')
    const parseData = JSON.parse(getcatchPoke)
    let totalData = [...parseData,data]
    return localStorage.setItem('myPoke',JSON.stringify(totalData))
    
}

export  function getCaughtPokes(){
    const getcatchPoke = localStorage.getItem('myPoke')
    const parseData = JSON.parse(getcatchPoke)
    return parseData
}


export function freePoke(id){
    const data = getCaughtPokes()
    const updateData = data.filter(res=>res.id !== id )
    localStorage.setItem('myPoke',JSON.stringify(updateData))
    return toast.success('Serbest bırakıldı')
}