"use client"

import Header from "@/components/Header"
import Styles from "./requestPage.module.scss"
import { useRouter } from "next/router"



const HomePage = () => {

    const router = useRouter()
    const parametro = router.query.apikey

    const localDB = localStorage.getItem('clientData')

    console.log(localDB)
    

    return (        
        <div className={Styles.container}>
               <Header />
                <h1>Olá {parametro}</h1>
        </div>
            
    )
}

export default HomePage