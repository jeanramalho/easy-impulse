import Image from "next/image"
import { Container } from "./style"
import LogoLinx from "../../../assets/logo-linx.png"


const Header = () => {

    return (
       <Container>
            <div className="logo-linx">
                <Image src={LogoLinx} alt="logo linx"/>
                <img src={LogoLinx} alt="logo da empresa linx" />
                <img src="../../assets/linx-impulse.webp" alt="logo da linx impulse" />
            </div>
       </Container>         
    )

}

export default Header