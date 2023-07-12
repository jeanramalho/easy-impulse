import { Container } from "./style"
import { useEffect } from "react"
import CardAdd from "../CardAdd"
import CardClient from "../CardClient"

    

const ListClients = () => {
    
   
        const clients = localStorage.getItem('clientData')
        const cardClients = JSON.parse(clients)
    
        console.log(cardClients)
  
    
    
    return (
        <Container>
            <CardAdd />
           {
            cardClients.map((cliente) => {
                return ( <CardClient key={cliente.apikey} apikey={cliente.apikey} secretkey={cliente.secretKey}/> )
            })
           }
        </Container>
    )
}

export default ListClients