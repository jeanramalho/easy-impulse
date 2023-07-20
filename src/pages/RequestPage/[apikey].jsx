"use client"

import Header from "@/components/Header"
import Styles from "./requestPage.module.scss"
import { useRouter } from "next/router"
import { useEffect } from "react"



const HomePage = () => {

    
    const localDB = localStorage.getItem('clientData')
   

    const router = useRouter()
    const parametro = router.query.apikey

    

    console.log(localDB)
    

    return (        
        <div className={Styles.container}>
               <Header />
                <h1>Olá {parametro}</h1>
        </div>
            
    )
}

export default HomePage