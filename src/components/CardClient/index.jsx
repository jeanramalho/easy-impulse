import { Container } from "./style";

import Link from "next/link";


const CardClient = ({apikey, secretkey}) => {

    const  handleClick = () => {
        console.log("clicou no card")
    }

    return (
        <Container onClick={handleClick}>
            <Link href="./RequestPage/tokstok">
                
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