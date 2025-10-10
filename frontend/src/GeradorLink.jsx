import styles from "./GeradorLink.module.css";
import React, { useState, useEffect, useRef } from "react";
import { BookCopy, MessageCircle } from "lucide-react";

export default function GeradorLink() {
  //-------------- Aba de Perguntas Rápidas --------------------
  const [showPopUp, setShowPopUp] = useState(false);
  const textareaRef = useRef(null);
  const PopUpRef = useRef(null);

  const easyAnswares = [
    "Olá! Tudo bem? 😄",
    "Bom dia! Tudo certo? Eu sou....",
    "Boa tarde! Tudo certo? Eu sou....",
    "Opa, tudo tranquilo?",
  ];

  // -- Caso clique fora do PopUp de mensagens padrões o popUp fechará ( tentar entender )
  useEffect(() => {
    function handlePopUpClick(event) {
      if (
        PopUpRef.current &&
        !PopUpRef.current.contains(event.target) &&
        textareaRef.current &&
        !textareaRef.current.contains(event.target)
      ) {
        setShowPopUp(false);
      }
    }
    document.addEventListener("mousedown", handlePopUpClick);
    return () => {
      document.removeEventListener("mousedown", handlePopUpClick);
    };
  }, []);

  //-------------- Formatação: Telefone ------------------------
  const [telephone, setTelephone] = useState("");

  const formatInputTelephone = (valor_digitado) => {
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

  const handlesTelephone = (e) => {
    const value = e.target.value;
    const number1 = value.replace(/\D/g, "");
    setTelephone(number1);
  };

  //--------------- Geração de Link ---------------------------
  const [links, setLinks] = useState([]);
  const [menssage, setMenssage] = useState("");
  const [buttonScroll, setButtonScroll] = useState(false);

  const generateLink = () => {
    if (!telephone) {
      alert("Adicione um número de telefone");
      return;
    }

    const local_Number_DDI = telephone.startsWith("55")
      ? telephone
      : "55" + telephone;

    const menssageCOD = encodeURIComponent(menssage || "");
    const url = `https://wa.me/${local_Number_DDI}${
      menssageCOD ? `?text=${menssageCOD}` : ""
    }`;

    setLinks((novoLink) => [...novoLink, url]);
  };

  //---------Copiar Link------------

  const copy = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log("Link copiado com sucesso");
      })
      .catch(() => {
        console.log("Link não copiado");
      });
  };

  //---------Abrir Whatsapp------------

  const openZapZap = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className={styles.containerBox}>
        <h2 className={styles.tittle}>
          {" "}
          <MessageCircle /> Gerador De Link
        </h2>
        <div className={styles.doc}>
          <label>📞 Número de Telefone</label>
          <input
            className={styles.inputNumber}
            type="text"
            placeholder="(xx) x xxxx-xxxx"
            maxLength={16}
            value={formatInputTelephone(telephone)}
            onChange={handlesTelephone}
          />

          <br />

          <label>💬 Mensagem (opicional)</label>
          <textarea
            className={styles.textareaMenssage}
            placeholder="Preparar mensagem"
            value={menssage}
            onClick={() => setShowPopUp(true)}
            ref={textareaRef}
            onChange={(e) => setMenssage(e.target.value)}
          ></textarea>

          {showPopUp && (
            <>
              <label> 😁 Exemplos de Mensagens-Padrão</label>
              <div ref={PopUpRef} className={styles.popUp}>
                {easyAnswares.map((msg, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setMenssage(msg);
                      setShowPopUp(false);
                    }}
                    className={styles.DefaultMensage}
                  >
                    {msg}
                  </p>
                ))}
              </div>
            </>
          )}

          <button className={styles.buttonPrepar} onClick={generateLink}>
            Preparar Mensagem
          </button>
        </div>
        <div className={styles.containerLinkGerado}>
          <label>Links Gerados:</label>

          {links.length > 0 && (
            <div
              className={`${styles.linksScroll} ${
                buttonScroll ? styles.expandido : styles.compacto
              }`}
            >
              {links.map((link, index) => (
                <div key={index}>
                  <div className={styles.linkagem}>
                    <p className={styles.styleLink} href={links}>
                      {link.length > 56 ? link.substring(0, 25) + "" : link}
                    </p>
                    <button
                      className={styles.buttonCopy}
                      onClick={() => copy(link)}
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
                        className={styles.lucide}
                      >
                        <path d="M5 7a2 2 0 0 0-2 2v11" />
                        <path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" />
                        <path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" />
                      </svg>
                    </button>
                  </div>
                  <button
                    className={styles.goWhatsapp}
                    onClick={() => openZapZap(link)}
                  >
                    Abrir Whatsapp
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className={styles.ExpandirButton}>
            <button
              className={styles.ButtonScrollBoleano}
              onClick={() => setButtonScroll(!buttonScroll)}
            >
              {buttonScroll ? "Compactar ▲" : "Expandir ▼"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
