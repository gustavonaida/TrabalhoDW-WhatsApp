import styles from "./GeradorLink.module.css";

export default function GeradorLink() {
  return (
    <>
      <div className={styles.topBar}>
        <h1 className={styles.logoText}>WhatsHub</h1>
      </div>
      <div className={styles.containerBox}>
        <h2 className={styles.tittle}>Gerador De Link</h2>
        <div className={styles.doc}>
          <label>Número de Telefone</label>
          <input className={styles.inputNumber} type="text" placeholder="(xx) x xxxx-xxxx"/>
          <br />
          <label>Mensagem (opicional)</label>
          <textarea className={styles.textareaMensage}></textarea>
          <br />
          <button className={styles.buttonPrepar}>Preparar Mensagem</button>
        </div>
      </div>
    </>
  );
}
