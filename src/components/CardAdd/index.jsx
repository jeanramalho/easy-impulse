import { useState } from "react";
import Modal from "react-modal"

import { Container } from "./style";

Modal.setAppElement('#Root')

const CardAdd = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <Container>
            <h2>Adcionar Cliente</h2>
            <p>+</p>
        </Container>
    )
}

export default CardAdd