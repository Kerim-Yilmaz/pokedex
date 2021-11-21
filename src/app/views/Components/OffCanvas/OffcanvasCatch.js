import React from 'react'
import { Alert, Col, Offcanvas } from 'react-bootstrap'
import { getCaughtPokes } from '../../helper/LocalstorageProcess'
import PokeCards from '../Cards/PokeCard'
import { useTranslation } from 'react-i18next';


export default function OffcanvasCaught({show,handleClose}) {
    const { t } = useTranslation();
    const caught = getCaughtPokes()

    return (
        <div>
            <Offcanvas 
                show={show}
                onHide={handleClose}
                placement='end'
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{t('caught')}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   {caught?.length !==0? caught.map(res=><Col md={12}>
                       <PokeCards data={res}/>
                   </Col>):<Alert variant='danger'>{t('emptyList')}</Alert>}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
