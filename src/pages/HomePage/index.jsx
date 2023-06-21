"use client"

import Header from "@/components/Header"
import { Container } from "./style"

import { BrowserRouter } from 'react-router-dom'

const HomePage = () => {

    return (
        <BrowserRouter>
            <Container>
                <Header />
            </Container>
       </BrowserRouter>
    )
}

export default HomePage