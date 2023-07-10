import { Container } from "./style"
import CardAdd from "../CardAdd"
import CardClient from "../CardClient"



const ListClients = () => {
    return (
        <Container>
            <CardAdd />
            {/* {obj.map((objeto) => {
                
               return(<CardClient apikey={objeto.apikey} secretkey={objeto.secretkey}/>) 
            })} */}
        </Container>
    )
}

export default ListClients