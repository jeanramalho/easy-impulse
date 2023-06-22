import Image from "next/image"
import { Container } from "./style"
import logoLinx from "../../../public/logo-linx.png"
import logoImpulse from "../../../public/linx-impulse.webp"



const Header = () => {

    return (
       <Container>
            <div className="logo-header">
                <Image src={logoLinx} alt="logo da linx"  className="logo-linx"/>
                <div className="box-impulse">
                    <Image src={logoImpulse} alt="logo da linx"  className="logo-impulse"/>
                </div>
                
            </div>
       </Container>         
    )

}

export default Header