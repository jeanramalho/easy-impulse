"use client"

import Header from "@/components/Header"
import Styles from "./ContainerPage.module.scss"


const HomePage = () => {

    return (        
            <div className={Styles.container} id="Root">
                <Header />
                
            </div>       
    )
}

export default HomePage