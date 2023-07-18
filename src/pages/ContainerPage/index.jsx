"use client"

import Header from "@/components/Header"
import HomePage from "../HomePage"
import Styles from "./ContainerPage.module.scss"


const ContainerPage = () => {

    return (        
            <div className={Styles.container} id="Root">
                <Header />
                <HomePage />
            </div>       
    )
}

export default ContainerPage