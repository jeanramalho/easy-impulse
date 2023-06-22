import Image from "next/image"
import { Container } from "./style"
import logoLinx from "../../../public/logo-linx.png"
import logoImpulse from "../../../public/linx-impulse.webp"



const Header = () => {

    return (
       <Container>
            <div className="logo-linx">
                <Image src={logoLinx} alt="logo da linx" />
                
            </div>
       </Container>         
    )

}

export default Header