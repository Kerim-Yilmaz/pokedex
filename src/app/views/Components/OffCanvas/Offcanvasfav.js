import React from 'react'
import { Alert, Col, Offcanvas } from 'react-bootstrap'
import { useFavPokemon } from '../../../redux/actions/FavActions'
import PokeCards from '../Cards/PokeCard'
import { useTranslation } from 'react-i18next';


export default function OffcanvasFav({show,handleClose}) {

    const { t } = useTranslation();
    const {favPokemons} = useFavPokemon()

    return (
        <div>
            <Offcanvas 
                show={show}
                onHide={handleClose}
                placement='end'
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{t('fav')}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   {favPokemons?.data?.length !==0? favPokemons.data.map(res=><Col md={12}>
                       <PokeCards data={res}/>
                   </Col>):<Alert variant='danger'>{t('emptyList')}</Alert>}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
