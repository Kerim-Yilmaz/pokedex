import { Container } from 'react-bootstrap'
import Content from './Content'
import Header from './Header'

export default function Layout(){


    return(
        <>
        <Container>
        <Header/>
        <Container fluid className='flex-row'>
        <Content/>
        </Container>
        </Container>
        </>
    )
}