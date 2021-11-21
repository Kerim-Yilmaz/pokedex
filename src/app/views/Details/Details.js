import React, {useEffect, useState} from "react";
import {
    Card,
    Col,
    Container,
    Button,
    Image,
    Row
} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {usePokemon} from "../../redux/actions/ListActions";
import Stats from "../Components/Stats/Stats";
import Types from "../Components/Type/Types";
import Loading from '../Components/Loading/Loading'
import {  useFavPokemon } from "../../redux/actions/FavActions";
import { Alert } from "react-bootstrap";
import CaughtModal from "../Components/Modal/CaughtModal";
import { freePoke, getCaughtPokes } from "../helper/LocalstorageProcess";
import Heart from "react-animated-heart";
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";


export default function Details() {
    const {id} = useParams()
    const fav = useFavPokemon()
    const [show,setShow]=useState(false)
    const {pokemonSpecies, PokemonSpecies, getPokeDetail, pokeDetail} = usePokemon()
    const getCaughtPoke = getCaughtPokes()
    const { t } = useTranslation();

    useEffect(() => {
        if (id) {
            PokemonSpecies(id)
            getPokeDetail(id)
        }
        //eslint-disable-next-line
    }, [])

    const checkCaugthPoke=()=>{
        const check=getCaughtPoke?.filter(res=>res.id ===pokeDetail?.data?.id)
        if(check.length>=1)return true
        return false
    }

    const checkFav= fav.favPokemons?.data.filter(res=>res.id===pokeDetail?.data?.id)
    const pokeText =pokemonSpecies.data?.flavor_text_entries?.filter(res => res.language.name === 'en' && res.version.name === 'lets-go-eevee')

    return (
        <>
        
            <Container >
            {
                pokeDetail.isLoading === true ? <Loading/>: pokeDetail.error ? 
                <Alert variant={'danger'}>
                Bir Hata Oluştu
              </Alert> : 

              <Col md={12}>
                  {show && <CaughtModal  data={pokeDetail?.data} show={show} handleClose={()=>setShow(false)}/> }
                    <Card border>
                        <Card.Body style={{backgroundColor: "#f2f2f2"}}>
                            <Row className='justify-content-md-center'>
                                <div className="d-flex justify-content-end" style={{maxHeight:'50px'}}>
                                    <Heart isClick={checkFav?.length===0?false:true} onClick={()=>fav.addOrDeleteFavPoke(pokeDetail.data)}/>
                                </div>      
                                <Col md={12}>
                                    <Image className='mx-auto d-block' roundedCircle
                                        style={{backgroundColor: 'pink'}}
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                                        width={100}
                                        height={100}/>
                                </Col>
                                <Col md={12}>
                                    <div className='text-center h5'style={{marginTop: '50px'}}>
                                        {pokeDetail.data?.name.toUpperCase()}{' '} {t('detail')}
                                    </div>
                                    <p style={{textAlign: 'center'}}>
                                        {pokeText?.length >= 1 ? pokeText[0].flavor_text : 'Nothing description'} 
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <Card.Text as='h5'>{t('stats')}</Card.Text>
                                    <Stats data={pokeDetail.data?.stats}/>
                                </Col>
                                <Col md={2}>
                                    <Card.Text as='h5'>{t('types')}</Card.Text>
                                    <Types data={pokeDetail.data?.types}/>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer style={{textAlign: 'center'}}>
                        {checkCaugthPoke()? 
                        <Button onClick={()=>{freePoke(pokeDetail.data.id);toast.success(t('free'))}} variant="warning">{t('fpoke')}</Button>:
                        <Button onClick={()=>setShow(true)} variant="danger">{t('cpoke')}</Button>}
                           
                        </Card.Footer>
                    </Card>
                </Col>
            } 
            </Container>
        </>
    );
}