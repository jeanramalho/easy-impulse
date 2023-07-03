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

                <div className="headerAddModal">
                    <h2>Novo Cliente</h2>
                    <p onClick={closeModal}>X</p>
                </div>
                
                <hr />

                <div className="divInputs">
                    <p>Apikey</p>
                    <input type='text' placeholder='Insira aqui sua api key...' required/>
                </div>

                <div className="divInputs">
                    <p>SecretKey</p>
                    <input type='text' placeholder='Insira aqui sua api key...' required/>
                </div>

                <button>Salvar</button>
        
            </Modal>
        </Container>
    )
}

export default CardAdd