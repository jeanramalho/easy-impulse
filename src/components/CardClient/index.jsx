import { Container } from "./style";


const CardClient = () => {

    const  handleClick = () => {
        console.log("clicou no card")
    }

    return (
        <Container onClick={handleClick}>
            <div>
                <h3>nome-do-cliente</h3>
                <p>adofbaoignaogroa==</p>
            </div>
            <h2>&gt;</h2>
        </Container>

    )
}

export default CardClient