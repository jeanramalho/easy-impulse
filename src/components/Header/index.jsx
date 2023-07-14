import Image from "next/image"
import Styles from "./header.module.scss"
import logoLinx from "../../../public/logo-linx.png"
import logoImpulse from "../../../public/linx-impulse.webp"




const Header = () => {

    return (
       <div className={Styles.container}>

            <div className={Styles.logoHeader}>

                <Image src={logoLinx} alt="logo da linx"  className={Styles.logoLinx}/>

                <div className={Styles.boxImpulse}>

                    <Image src={logoImpulse} alt="logo da linx"  className={Styles.logoImpulse}/>

                </div>
                
            </div>
       </div>         
    )

}

export default Header