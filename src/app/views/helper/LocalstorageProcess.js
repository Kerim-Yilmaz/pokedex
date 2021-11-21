




export  function catchPoke(data){
    const getcatchPoke = localStorage.getItem('myPoke')
    const parseData = JSON.parse(getcatchPoke)
    if(!parseData){
        return localStorage.setItem('myPoke',JSON.stringify([data]))
    }else{
        let setData = [...parseData,data]
        return localStorage.setItem('myPoke',JSON.stringify(setData))


    }

    
    
}

export  function getCaughtPokes(){
    const getcatchPoke = localStorage.getItem('myPoke')
    const parseData = JSON.parse(getcatchPoke)
    return parseData ? parseData:[]
}


export function freePoke(id){
    const data = getCaughtPokes()
    const updateData = data.filter(res=>res.id !== id )
    localStorage.setItem('myPoke',JSON.stringify(updateData))
}