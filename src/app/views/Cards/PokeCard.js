import {Badge,  Col, Row} from "react-bootstrap";


export default function PokeCards({ data }) {


    const bagdeBg =(id)=>{
        switch (id) {
            case 1:
            return 'warning'
            case 2:
            return 'primary'
            case 3:
            return 'danger'
            default:
                break;
        }

    }

    return (
        <>
            <div class="profile-card-4 text-center"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} class="img img-responsive"/>
                <div class="profile-content">
                    <div class="profile-name">{data?.name.toUpperCase()}
                        <p>Height : {data.height}</p>
                    </div>
                    ss
                    <Row>
                        {data.abilities.map(res=>{
                            const { ability,slot } =res 
                            return <Col xs={4}>
                            <div class="profile-overview">
                                <Badge pill bg={bagdeBg(slot)}>
                                  {ability.name}
                                </Badge>                                
                            </div>
                            </Col>
                        })}
                        
                       
                    </Row>
                          
                </div>
            </div>
        </>
    )
}
