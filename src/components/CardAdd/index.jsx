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
            <p onClick={openModal}>+</p>

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Exemple Modal"
            overlayClassName="modal-overlay"
            className="modal-content" >
                <h2>Hello i am a modal</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, 
                    aspernatur similique quo quia culpa officiis mollitia distinctio autem 
                    ab quidem placeat, cupiditate dolorum corrupti fuga suscipit sit vel 
                    asperiores? Exercitationem ratione necessitatibus iste atque tempore vero, 
                    quisquam delectus vitae corporis maiores, autem modi recusandae at 
                    consectetur esse aperiam, quasi sequi quos repellat voluptas dolores 
                    maxime quo deserunt. Similique dolor recusandae debitis harum odio, 
                    tempora id quod neque impedit saepe et odit. Iusto, similique voluptas.</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </Container>
    )
}

export default CardAdd