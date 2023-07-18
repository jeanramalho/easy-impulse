"use client"

import Header from "@/components/Header"
import ListClients from "@/components/ListClients"
import Styles from "./HomePage.module.scss"


const HomePage = () => {

    return (        
            <div className={Styles.container} id="Root">
                <ListClients />
            </div>       
    )
}

export default HomePage