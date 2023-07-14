import Image from "next/image"
import style from "./header.module.scss"
import logoLinx from "../../../public/logo-linx.png"
import logoImpulse from "../../../public/linx-impulse.webp"




const Header = () => {

    return (
       <div className={style.container}>

            <div className={style.logoHeader}>

                <Image src={logoLinx} alt="logo da linx"  className={style.logoLinx}/>

                <div className={style.boxImpulse}>

                    <Image src={logoImpulse} alt="logo da linx"  className={style.logoImpulse}/>
                    
                </div>
                
            </div>
       </div>         
    )

}

export default Header