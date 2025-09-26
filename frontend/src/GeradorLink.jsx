import styles from "./GeradorLink.module.css";
import LinkGerado from "./LinkGerado.jsx"
import { useState } from "react";

export default function GeradorLink() {

  //-------------- Formatação: Telefone ------------------------
  const [telefone, setTelefone] = useState("")

  const formatInputTelefone = (valor_digitado) => {
    const number = valor_digitado.replace(/\D/g, "").slice(0, 11);

    const qtdCaracteres = number.length;
    let formatNumber = number;

    if (qtdCaracteres > 0) {
      formatNumber = "(" + number.substring(0, 2);
    }
    if (qtdCaracteres >= 3) {
      formatNumber += ") " + number.substring(2, 3);
    }
    if (qtdCaracteres >= 4) {
      formatNumber += " " + number.substring(3, 7);
    }
    if (qtdCaracteres >= 8) {
      formatNumber += "-" + number.substring(7, 11);
    }
    return formatNumber;
  };

  const handlesTelefone = (e) => {
    const value = e.target.value;
    const number1 = value.replace(/\D/g, "");
    setTelefone(number1);
  };

  return (
    <>
      <div className={styles.topBar}>
        <h1 className={styles.logoText}>WhatsHub</h1>
      </div>
      <div className={styles.containerBox}>
        <h2 className={styles.tittle}> Gerador De Link</h2>
        <div className={styles.doc}>
          <label>📞   Número de Telefone</label>
          <input
            className={styles.inputNumber}
            type="text"
            placeholder="(xx) x xxxx-xxxx"
            maxLength={16}
            value={formatInputTelefone(telefone)}
            onChange={handlesTelefone}
          />
          <br />
          <label>Mensagem (opicional)</label>
          <textarea className={styles.textareaMenssage}></textarea>
          <br />
          <button className={styles.buttonPrepar}>Preparar Mensagem</button>
        </div>
        <div className={styles.containerLinkGerado}>
          <LinkGerado />
        </div>
      </div>
    </>
  );
}
