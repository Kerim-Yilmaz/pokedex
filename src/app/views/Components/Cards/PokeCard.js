import {Badge,  Col, Row} from "react-bootstrap";
import { bagdeBg } from "../../helper/Helper";
import Heart from "react-animated-heart";
import { useFavPokemon } from "../../../redux/actions/FavActions";
import { Link } from "react-router-dom";
export default function PokeCards({ data }) {


    const fav = useFavPokemon()
    const checkFav= fav.favPokemons?.data.filter(res=>res.id===data.id)
    return (
        <>
            <div className="profile-card-4 text-center">
                <div className="d-flex justify-content-end" style={{maxHeight:'20px'}}>
                    <Heart isClick={checkFav?.length===0?false:true} onClick={()=>fav.addOrDeleteFavPoke(data)}/>
                </div>
                <Link to={`/details/${data.id}`}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.id} className="img img-responsive"/>
                
                <div className="profile-content">
                    <div className="profile-name">{data?.name.toUpperCase()}
                        <p>Height : {data.height}</p>
                    </div>
                    <Row>
                        {data.abilities.map(res=>{
                            const { ability,slot } =res 
                            return <Col xs={4}>
                            <div className="profile-overview">
                                <Badge pill bg={bagdeBg(slot)}>
                                  {ability.name}
                                </Badge>                                
                            </div>
                            </Col>
                        })}
                        
                       
                    </Row>
                          
                </div>
                </Link>

            </div>
        </>
    )
}
