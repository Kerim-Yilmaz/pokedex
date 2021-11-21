
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { clearPokeData } from "../../redux/actions/general-actions";
import { usePokemon } from "../../redux/actions/ListActions";
import { CLEAR_LIST } from "../../redux/actions/ListActionTypes";
import PokeCards from "../Components/Cards/PokeCard";
import Imagediv from "../Components/Image/Imagediv";
import { PagePagination } from "../Components/Pagination/Pagination";


export default function Home(){
    const {pokemons,getPokemons} = usePokemon()
    const [params,setParams]=useState({
        offset:0,
        limit:12,
    })


    const handlePaginationChange =({page})=>{
        setParams({
            ...params,
            offset:page ===0 ? 0: (page-1)*12 
        })
    }


    useEffect(() => {
        getPokemons(params)

        return () => {
            clearPokeData({type:CLEAR_LIST})

        }
        //eslint-disable-next-line
    }, [params])

    return(
     <>
     <Container fluid>
         <Row> 
           {pokemons.data?.sort((a,b)=>a.id-b.id).map(res =>
           
                 <Col xs={3}>
                        <PokeCards data={res}/>
                 </Col>)} 
         </Row>
         <div style={{alignItems:'center',textAlign:'center',alignContent:'center',alignSelf:'center'}}>

        <Imagediv/>
         <PagePagination offset={params.offset} callback={(e)=>handlePaginationChange(e)}/>
         </div>
         </Container> 
         </>
    )
}