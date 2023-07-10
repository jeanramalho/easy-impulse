import { Container } from "./style"

import CardAdd from "../CardAdd"
import CardClient from "../CardClient"

const obj = [
    {"apikey": "tokstoken", "secretKey":"sdfsdfsd"},
    {"apikey": "paodeacucar", "secretKey":"sdfsdfsd"},
    {"apikey": "clubeextra", "secretKey":"sdfsdfsd"},
    
]


const ListClients = () => {
    return (
        <Container>
            <CardAdd />
            <CardClient apikey={"TokStok"} secretkey={"nodasgfnasofignaei=="}/>
        </Container>
    )
}

export default ListClients