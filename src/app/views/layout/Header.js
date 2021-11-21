import { Image, Navbar, Badge, Container} from "react-bootstrap";
import poke from '../../assets/image/poke.png'
import favorite from '../../assets/image/fav.png'
import { useFavPokemon } from "../../redux/actions/FavActions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getCaughtPokes } from "../helper/LocalstorageProcess";
import OffcanvasFav from "../Components/OffCanvas/Offcanvasfav";
import OffcanvasCaught from "../Components/OffCanvas/OffcanvasCatch";
import LanguageSelector from "../Components/LangSelector/LanguageSelector";

export default function Header() {

  
    const favpoke = useFavPokemon()
    const caughtPoke = getCaughtPokes()
    const [fav,setFav]=useState(false)
    const [caught,setCaught]=useState(false)

    return (
        <>
        {fav && <OffcanvasFav show={fav} handleClose={()=>setFav(!fav)}/>}
        {caught && <OffcanvasCaught show={caught} handleClose={()=>setCaught(!caught)}/>}

        
            <Navbar>
                <Container>
                    <Navbar.Brand >
                    <Link to='/'>
                    <img src="https://www.piratesandprincesses.net/wp-content/uploads/2020/11/Pokemon.jpg" width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand >
                            <LanguageSelector/>
                        </Navbar.Brand>
                        <Navbar.Brand onClick={()=>setCaught(true)} >
                        <Image  width={50} height={50} src={poke}/>
                        <Badge bg="danger">{caughtPoke?.length}</Badge>
                        </Navbar.Brand>
                        <Navbar.Brand onClick={()=>setFav(true)}>
                        <Image  width={50} height={50} src={favorite}/>
                        <Badge bg="danger">{favpoke?.favPokemons?.data?.length}</Badge>
                        </Navbar.Brand>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}
