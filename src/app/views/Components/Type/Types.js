import { Badge } from "react-bootstrap";
import { bagdeBg } from "../../helper/Helper";


export default function Types({data}){





    return(
        <>
        {data?.map(res=>{
            const {slot,type}=res
            return (
                <>
                 <Badge bg={bagdeBg(slot)}>{type.name}</Badge>{' '}
                </>
           )
        })}
        </>
    )
}