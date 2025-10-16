import { useEffect, useState } from "react";
import styles from "./ListaMensagens.module.css";
import Tema from "./Tema";

export default function ListaMensagens({ contatos }) {
  // -------------- Abrir Aba Lateral ---------------
  const [open, setOpen] = useState(false);

  //--------------- Formatação de Número de Telefone -----------
  const formatInputNumero = (valor_digitado) => {
    const number = valor_digitado.replace(/\D/g, "").slice(0, 11);
    const qtdCaracteres = number.length;
    let formatNumber = number;

    if (qtdCaracteres > 0) {
      formatNumber = "(" + number.substring(0, 2);
    }
    if (qtdCaracteres >= 3) {
      formatNumber += ") " + number.substring(2, 7);
    }
    if (qtdCaracteres >= 8) {
      formatNumber += "-" + number.substring(7, 11);
    }

    return formatNumber;
  };

  //-------------- Filtro de Cor --------------------
  const [colorFilter, setColorFilter] = useState(null);

  const standardizeColor = (color) => {
    if (!color) return null;
    return color.trim().toLowerCase();
  };

  const contatosFiltrados = colorFilter
    ? contatos.filter(
        (c) => standardizeColor(c.cor) === standardizeColor(colorFilter)
      )
    : contatos;

  const cores = ["#1bc257", "#A51D2D", "#C64600", "#1A5FB4", "#E5A50A"];

  //------------------- Geração de Links ----------------
  const [mensagem, setMensagem] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [linksGRD, setLinksGRD] = useState([]);

  const gerarLinks = () => {
    if (!mensagem.trim() || contatosFiltrados.length === 0) return;

    const links = contatosFiltrados.map((c) => {
      const numero = c.numero.startsWith("55")
        ? c.numero
        : "55" + c.numero.replace(/\D/g, "");
      const msg = encodeURIComponent(mensagem);
      const url = `https://wa.me/${numero}?text=${msg}`;
      return { nome: c.nome, numero, url };
    });

    setLinksGRD(links);
    setShowPopUp(true);
    setOpen(false);
  };

  const ClosePopUp = () => {
    setShowPopUp(false);
  };

  //-------------- Deletar Pessoa ------------

  const [contatoVisivel, setContatoVisiveis] = useState(contatosFiltrados);

  useEffect(() => {
    setContatoVisiveis(contatosFiltrados);
  }, [contatosFiltrados]);

  const removeAba = (index) => {
    setContatoVisiveis((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <button
          className={`${styles.buttonListMensage} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-x"
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
                    }
                  ></button>
                ))}
              </div>

              <br />
              <div className={styles.containerList}>
                {contatoVisivel.length > 0 ? (
                  contatoVisivel.map((c, i) => (
                    <div key={i} className={styles.List}>
                      <div className={styles.ListFormatForButton}>
                        <div
                          className={styles.corPessoa}
                          style={{ backgroundColor: c.cor }}
                        ></div>
                        <div className={styles.semCriatividadeParaNome}>
                          <strong>{c.nome}</strong>{" "}
                          {formatInputNumero(c.numero)}
                        </div>
                      </div>
                      <button
                        className={styles.deletar}
                        onClick={() => removeAba(i)}
                      >
                        {" "}
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
                          class="lucide lucide-trash2-icon lucide-trash-2"
                        >
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M3 6h18" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
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
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
                <button className={styles.buttonPrepar} onClick={gerarLinks}>
                  Preparar Mensagem para {contatoVisivel.length}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopUp && (
        <div className={styles.popupOverlay} onClick={ClosePopUp}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className={styles.nav}>
              <h2>Links Gerados ({linksGRD.length})</h2>
              <button onClick={ClosePopUp} className={styles.closePopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-x"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </button>
            </nav>
            <div className={styles.ContainerListaLinks}>
              <ul>
                {linksGRD.map((link, i) => (
                  <li key={i}>
                    <div className={styles.ListaLinks}>
                      <strong>{link.nome}</strong>
                      <br />
                      <p>Link Gerado:</p>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
