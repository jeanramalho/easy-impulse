"use client"

import Header from "@/components/Header"

import { useRouter } from "next/router"

import { Container } from "./style"

const RequestPage = () => {
    const router = useRouter()
    const parametro = router.query.apikey

    return (
        <Container>
            <Header />
            <h1>A apikey é: {parametro}</h1>
        </Container>
    )
}

export default RequestPage