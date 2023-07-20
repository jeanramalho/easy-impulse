"use client"

import Header from "@/components/Header"
import Styles from "./requestPage.module.scss"
import { useRouter } from "next/router"
import { useEffect } from "react"



const HomePage = () => {

    const router = useRouter()
    const parametro = router.query.apikey

    useEffect(() => {

        const localDB = localStorage.getItem('clientData')
        const objDB = JSON.parse(localDB)
        

    }, [objDB])
    
    

    return (        
        <div className={Styles.container}>
               <Header />
                <h1>Olá {parametro}</h1>
        </div>
            
    )
}

export default HomePage