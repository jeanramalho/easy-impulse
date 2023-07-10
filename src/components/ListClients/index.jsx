import { Container } from "./style"

import CardAdd from "../CardAdd"
import CardClient from "../CardClient"

const obj = [
    {"apikey": "tokstoken", "secretkey":"sdfsdfsd1"},
    {"apikey": "paodeacucar", "secretkey":"sdfsdfsd2"},
    {"apikey": "clubeextra", "secretkey":"sdfsdfsd3"},
    
]


const ListClients = () => {
    return (
        <Container>
            <CardAdd />
            {obj.map((objeto) => {
                
               return(<CardClient apikey={objeto.apikey} secretkey={objeto.secretkey}/>) 
            })}
        </Container>
    )
}

export default ListClients