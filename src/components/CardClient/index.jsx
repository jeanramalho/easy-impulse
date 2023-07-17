import Styles from "./CardClient.module.scss";

import Link from "next/link";


const CardClient = ({apikey, secretkey}) => {

    let redirect = `./RequestPage/${apikey}`

    return (
        <div className={Styles.container}>
            
            <Link className={Styles.link} href={redirect}>
                
                    <div className={Styles.cardInfo}> 
                        <h3>{apikey}</h3>
                        <p>{secretkey}</p>
                    </div>

                    <h3>&gt;</h3>
               
            </Link>
            
        </div>

    )
}

export default CardClient