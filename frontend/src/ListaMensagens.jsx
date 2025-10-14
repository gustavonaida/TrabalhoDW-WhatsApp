import { useState } from "react";
import styles from "./ListaMensagens.module.css";
import Tema from "./Tema";

export default function ListaMensagens({ contatos }) {
  // -------------- Abirir Aba Lateral ---------------
  const [open, setOpen] = useState(false);
  const [colorFilter, setColorFilter] = useState(null)

  const formatInputNumero = (valor_digitado) => {
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

  const standardizeColor = (color) => {
    if (!color) return null;
    return color.trim().toLowerCase();
  }

  const contatosFiltrados = colorFilter
  ? contatos.filter(
      (c) => standardizeColor(c.cor) === standardizeColor(colorFilter)
    )
  : contatos;

  const cores = [
    "#1bc257",
    "#A51D2D", 
    "#C64600", 
    "#1A5FB4",
    "#E5A50A", 
  ]
  return (
    <>
      <div>
        <button
          className={`buttonListMensage ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          {" "}
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={styles.lucideList}
          >
            <path d="M3 5h.01" />
            <path d="M3 12h.01" />
            <path d="M3 19h.01" />
            <path d="M8 5h13" />
            <path d="M8 12h13" />
            <path d="M8 19h13" />
          </svg>
        </button>

        <div className={`${styles.abaLateral} ${open ? styles.open : ""}`}>
          <div className={styles.aba}>
            <div className={styles.CloseAndTema}>
              <div className="ButtonTema">
                <Tema />
              </div>
              <button
                onClick={() => setOpen(false)}
                className={styles.CloseAba}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-x-icon lucide-circle-x"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </button>
            </div>

            <div className={styles.boxSelectMensage}>
              <div className={styles.tittle}>
                <h1>Lista de Contatos</h1>
                <br />
                <p>
                  Você pode gerar uma mesma mensagem para diversos contatos em
                  diferentes links!
                </p>
              </div>
                <div className={styles.ContainerInputColor}>
                  {cores.map((color, i) => (
                    <button
                    key={i}
                    className={`${styles[`InputMensageColor${i + 1}`]} ${
                      colorFilter === color ? styles.active : ""
                    }`}
                    onClick={() =>
                      setColorFilter(colorFilter === color ? null : color)
                    }> </button>
                  ))}
                  
                </div>
                
              <br />
              <div className={styles.containerList}>
              
                {contatosFiltrados.length > 0 ? (
                  contatosFiltrados.map((c, i) => (
                      <div key={i} className={styles.List}>
                        <div
                          className={styles.corPessoa}
                          style={{
                            backgroundColor: c.cor,
                          }}
                        ></div>
                        <div className={styles.semCriatividadeParaNome}>
                          <strong>{c.nome}</strong>{" "}
                          {formatInputNumero(c.numero)}
                        </div>
                      </div>
                  ))
                ) : (
                  <i>Nenhum Contato Adicionado</i>
                )}
              </div>
              <div className={styles.fundoBlur}>
                <label>Mensagem</label>
                <textarea
                  className={styles.textareaMenssage}
                  placeholder="Preparar mensagem"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
