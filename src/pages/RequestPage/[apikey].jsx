"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Styles from "./requestPage.module.scss";

import SwitchRequest from "@/components/SwitchRequest";

const HomePage = () => {
  const router = useRouter();
  const parametro = router.query.apikey;
  const [clienteAtual, setClienteAtual] = useState(null);

  useEffect(() => {
    const localDB = localStorage.getItem("clientData");
    const objDB = JSON.parse(localDB);

    const clienteFiltrado = filtraObj(objDB, parametro);
    setClienteAtual(clienteFiltrado);
  }, [parametro]);

  function filtraObj(db, valorApikey) {
    let clienteAtual = db.find((objeto) => objeto.apikey.includes(valorApikey));

    if (clienteAtual) {
      console.log(clienteAtual);
      return clienteAtual;
    } else {
      console.log(valorApikey);
      console.log("deu ruim");
      return null;
    }
  }

  return (
    <div className={Styles.container}>
      {/* <Header />
      {clienteAtual ? (
        <h1>Olá {clienteAtual.apikey} e {clienteAtual.secretKey}</h1>
      ) : (
        <h1>Cliente não encontrado</h1>
      )}
      <SwitchRequest clientApikey={clienteAtual.apikey} clientSecretKey={clienteAtual.secretKey} /> */}
    </div>
  );
};

export default HomePage;
