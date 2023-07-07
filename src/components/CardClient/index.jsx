import { Container } from "./style";

import Link from "next/link";


const CardClient = () => {

    const  handleClick = () => {
        console.log("clicou no card")
    }

    return (
        <Container onClick={handleClick}>
            <Link href="./RequestPage/tokstok">
                
                    <div>
                        <h3>nome-do-cliente</h3>
                        <p>adofbaoignaogroa==</p>
                    </div>
                    <h2>&gt;</h2>
               
            </Link>
            
        </Container>

    )
}

export default CardClient