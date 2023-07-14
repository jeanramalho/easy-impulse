"use client"

import Header from "@/components/Header"
import ListClients from "@/components/ListClients"
import style from "./homePage.module.scss"


const HomePage = () => {

    return (        
            <div className={style.container} id="Root">
                <Header />
                <ListClients />
            </div>       
    )
}

export default HomePage