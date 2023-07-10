import { Container } from "./style";

import Link from "next/link";


const CardClient = ({apikey, secretkey}) => {

    let redirect = `./RequestPage/${apikey}`

    return (
        <Container>
            <Link href={redirect}>
                
                    <div>
                        <h3>{apikey}</h3>
                        <p>{secretkey}</p>
                    </div>
                    <h2>&gt;</h2>
               
            </Link>
            
        </Container>

    )
}

export default CardClient