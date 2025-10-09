import styles from "./TextoSimples.module.css";
import { MessageCircle } from "lucide-react";

export default function Text() {
  return (
    <>
      <div className={styles.PositionText}>
        <div className={styles.SimpleText}>
          <h1 className={styles.Tittle}>
            {" "}
            <MessageCircle /> Whats Hub
          </h1>
          <h3 className={styles.SubTittle}>
            O jeito mais rápido de iniciar conversas no WhatsApp. Gere links
            instantâneos e mantenha seus contatos organizados.
          </h3>
        </div>
      </div>
    </>
  );
}
