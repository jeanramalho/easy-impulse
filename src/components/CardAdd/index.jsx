import { useState } from "react";
import Modal from "react-modal"

import { Container } from "./style";

// Modal.setAppElement('#Root')

const CardAdd = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [apiKeyValue, setApiKey] = useState("")
    const [secretKeyValue, setSecretkey] = useState("")

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const  handleClick = () => {
        // const cliente = {"apikey": apikey, "secretkey": secretkey}
        // localStorage.setItem('cliente', JSON.stringify(cliente))

        console.log(apiKeyValue)
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
                    <input type='text' value={apiKeyValue} placeholder='Insira aqui sua api key...' onChange={setApiKey} required/>
                </div>

                <div className="divInputs">
                    <p>SecretKey</p>
                    <input type='text' value={secretKeyValue} placeholder='Insira aqui sua api key...' onChange={setSecretkey}required/>
                </div>

                <button onClick={handleClick}>Salvar</button>
        
            </Modal>
        </Container>
    )
}

export default CardAdd