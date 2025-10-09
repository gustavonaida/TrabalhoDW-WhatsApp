import { useState } from "react";
import styles from "./ListaMensagens.module.css";
import Tema from "./Tema";

export default function ListaMensagens() {
  // -------------- Abirir Aba Lateral ---------------
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className={`buttonListMensage ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
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
            class="lucide lucide-list-icon lucide-list"
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
            <div className={styles.boxSelectMensage}></div>
          </div>
        </div>
      </div>
    </>
  );
}
