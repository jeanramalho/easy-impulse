import { Container } from "./style"

import CardAdd from "../CardAdd"
import CardClient from "../CardClient"


const ListClients = () => {
    return (
        <Container>
            <CardAdd />
            <CardClient apikey={"TokStok"} secretkey={"nodasgfnasofignaei=="}/>
        </Container>
    )
}

export default ListClients