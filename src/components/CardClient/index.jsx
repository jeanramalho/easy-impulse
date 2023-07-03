import { useState } from "react";
import Modal from "react-modal"

import { Container } from "./style";


const CardClient = () => {

    const  handleClick = () => {
        console.log("clicou no card")
    }

    return (
        <Container>
            <div>
                <h3>nome-do-cliente</h3>
                <p>adofbaoignaogroa==</p>
            </div>
            <h2 onClick={handleClick}>&gt;</h2>
        </Container>

    )
}

export default CardClient