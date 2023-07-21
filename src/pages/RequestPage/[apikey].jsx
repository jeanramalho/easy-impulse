"use client"

import Header from "@/components/Header"
import Styles from "./requestPage.module.scss"
import { useRouter } from "next/router"
import { useEffect } from "react"



const HomePage = () => {

    const router = useRouter()
    const parametro = router.query.apikey

    useEffect(() => {

        const router2 = useRouter()
        const parametro2 = router2.query.apikey

        const localDB = localStorage.getItem('clientData')
        const objDB = JSON.parse(localDB)
        
        filtraObj(objDB, parametro2)

    }, [])
    
   function filtraObj(db, valorApikey) {
    let clienteAtual = db.find((objeto) => objeto.apikey.includes(valorApikey));

    if(clienteAtual){
        console.log(clienteAtual)
        return clienteAtual
    } else {
        console.log(valorApikey)
        console.log("deu ruim")
        return false
    }
   }

    return (        
        <div className={Styles.container}>
               <Header />
                <h1>Olá {parametro}</h1>
        </div>
            
    )
}

export default HomePage