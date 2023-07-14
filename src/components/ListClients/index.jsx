import Styles from "./listClients.module.scss"
import { useEffect } from "react"
import CardAdd from "../CardAdd"
import CardClient from "../CardClient"

    

const ListClients = () => {
    
 
    const clients = localStorage.getItem('clientData')
    const cardClients = JSON.parse(clients)

    console.log(clients)
    console.log(cardClients)

        
    
    return (
        <div className={Styles.container}>
            <CardAdd />
            {
                cardClients ? (
                    cardClients.map((cliente) => (
                    <CardClient key={cliente.apikey} apikey={cliente.apikey} secretkey={cliente.secretKey} />
                    ))
                ) : (
                    <CardClient key="0" apikey="Crie um novo registro" secretkey="" />
                )
            }
        </div>
    )
}

export default ListClients