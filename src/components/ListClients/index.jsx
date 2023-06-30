import { Container } from "./style"

import CardAdd from "../CardAdd"
import CardClient from "../CardClient"


const ListClients = () => {
    return (
        <Container>
            <CardAdd />
            <CardClient />
        </Container>
    )
}

export default ListClients