import { Container } from 'react-bootstrap'
import Content from './Content'
import Header from './Header'

export default function Layout(){


    return(
        <>
        <Header/>
        <Container fluid>
        <Content/>
        </Container>
        </>
    )
}