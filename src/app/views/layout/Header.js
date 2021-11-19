import {Container, Image, Navbar,Button, Badge} from "react-bootstrap";
import poke from '../../assets/image/poke.png'
import fav from '../../assets/image/fav.png'

export default function Header({}) {


    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                    <img src="https://www.piratesandprincesses.net/wp-content/uploads/2020/11/Pokemon.jpg" width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand onClick>
                        <Image  width={50} height={50} src={poke}/>
                        <Badge bg="danger">9</Badge>
                        </Navbar.Brand>
                        <Navbar.Brand onClick>
                        <Image  width={50} height={50} src={fav}/>
                        <Badge bg="danger">9</Badge>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}
