import { useState } from "react";
import Modal from "react-modal"

import { Container } from "./style";

// Modal.setAppElement('#Root')

const CardAdd = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    const [apiKeyValue, setApiKey] = useState("")
    const handleSetApikey = (e) => {
        setApiKey(e.target.value)
    }

    const [secretKeyValue, setSecretkey] = useState("")
    const handleSetSecretkey = (e) => {
        setSecretkey(e.target.value)
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    let clientes = []
    const cliente = {"apikey": apiKeyValue, "secretkey": secretKeyValue}

    const  handleClickSave = () => {
        clientes += JSON.stringify(cliente)
        localStorage.setItem('cliente', JSON.stringify(clientes))
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
                    <input type='text' value={apiKeyValue} placeholder='Insira aqui sua api key...' onChange={handleSetApikey}required/>
                </div>

                <div className="divInputs">
                    <p>SecretKey</p>
                    <input type='text' value={secretKeyValue} placeholder='Insira aqui sua api key...' onChange={handleSetSecretkey}required/>
                </div>

                <button onClick={handleClickSave}>Salvar</button>
        
            </Modal>
        </Container>
    )
}

export default CardAdd