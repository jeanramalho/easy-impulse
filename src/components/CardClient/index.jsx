import style from "./CardClient.module.scss";

import Link from "next/link";


const CardClient = ({apikey, secretkey}) => {

    let redirect = `./RequestPage/${apikey}`

    return (
        <div className={style.container}>
            <Link href={redirect}>
                
                    <div>
                        <h3>{apikey}</h3>
                        <p>{secretkey}</p>
                    </div>
                    <h2>&gt;</h2>
               
            </Link>
            
        </div>

    )
}

export default CardClient