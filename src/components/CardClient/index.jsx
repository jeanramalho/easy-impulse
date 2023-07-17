import Styles from "./CardClient.module.scss";

import Link from "next/link";


const CardClient = ({apikey, secretkey}) => {

    let redirect = `./RequestPage/${apikey}`

    return (
        <div className={Styles.container}>
            <Link className={Styles.Link} href={redirect}>
                
                    <div className={Styles.cardInfo}> 
                        <h3 className={Styles.titleApiKey}>{apikey}</h3>
                        <p className={Styles.titleSecretKey}>{secretkey}</p>
                    </div>

                    <p className={Styles.arrowReqPage}>&gt;</p>
               
            </Link>
            
        </div>

    )
}

export default CardClient