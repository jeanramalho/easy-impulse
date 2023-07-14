import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import Styles from './CardAdd.module.scss';

// Modal.setAppElement('#Root')

const CardAdd = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [apiKeyValue, setApiKey] = useState('');
  const [secretKeyValue, setSecretKey] = useState('');
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('clientData');
    if (savedData) {
      setClientData(JSON.parse(savedData));
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSetApiKey = (e) => {
    setApiKey(e.target.value);
  };

  const handleSetSecretKey = (e) => {
    setSecretKey(e.target.value);
  };

  const handleSaveClick = () => {
    const newData = [
      ...clientData,
      {
        apikey: apiKeyValue,
        secretKey: secretKeyValue,
      },
    ];
    setClientData(newData);
    localStorage.setItem('clientData', JSON.stringify(newData));
    setApiKey('');
    setSecretKey('');
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.titleCard}>Adicionar Cliente</h2>
      <p className={Styles.plusCard} onClick={openModal}>+</p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="headerAddModal">
          <h2>Novo Cliente</h2>
          <p onClick={closeModal}>X</p>
        </div>

        <hr />

        <div className="divInputs">
          <p>Apikey</p>
          <input
            type="text"
            value={apiKeyValue}
            placeholder="Insira aqui sua api key..."
            onChange={handleSetApiKey}
            required
          />
        </div>

        <div className="divInputs">
          <p>SecretKey</p>
          <input
            type="text"
            value={secretKeyValue}
            placeholder="Insira aqui sua secret key..."
            onChange={handleSetSecretKey}
            required
          />
        </div>

        <button onClick={handleSaveClick}>Salvar</button>
      </Modal>
    </div>
  );
};

export default CardAdd;
