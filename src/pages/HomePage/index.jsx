"use client"

import Header from "@/components/Header"
import ListClients from "@/components/ListClients"
import { Container } from "./style"



const HomePage = () => {

    return (        
            <Container>
                <Header />
                <ListClients />
            </Container>       
    )
}

export default HomePage