import styles from "./AgendaContatos.module.css";
import { useState } from "react";

export default function AgendaContatos() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [contatos, setContatos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSalvar = () => {
    if (!nome || !numero) return;

    const novoContato = { nome, numero };

    if (editIndex !== null) {
      const atualizados = [...contatos];
      atualizados[editIndex] = novoContato;
      setContatos(atualizados);
      setEditIndex(null);
    } else {
      setContatos([...contatos, novoContato]);
    }

    setNome("");
    setNumero("");
  };

  const handleEditar = (index) => {
    setNome(contatos[index].nome);
    setNumero(contatos[index].numero);
    setEditIndex(index);
  };

  const handleDeletar = (index) => {
    const atualizados = contatos.filter((_, i) => i !== index);
    setContatos(atualizados);
  };

  const handleMensagem = (numero) => {
    const cleaned = numero.replace(/\D/g, "");
    const link = `https://wa.me/55${cleaned}`;
    window.open(link, "_blank");
  };

  return (
    <div className={styles.containerBox}>
      <h2 className={styles.tittle}>Agenda de Contatos</h2>

      <div className={styles.doc}>
        <label>👤 Nome do contato</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>📞 Número</label>
        <input
          type="text"
          className={styles.input}
          placeholder="(xx) xxxxx-xxxx"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <button className={styles.buttonPrepar} onClick={handleSalvar}>
          {editIndex !== null ? "Atualizar Contato" : "Salvar na Agenda"}
        </button>
      </div>

      <div className={styles.listaContatos}>
        <h3>Seus Contatos ({contatos.length})</h3>
        {contatos.map((contato, index) => (
          <div key={index} className={styles.cardContato}>
            <div className={styles.info}>
              <strong>{contato.nome}</strong>
              <span>{contato.numero}</span>
            </div>
            <div className={styles.acoes}>
              <button onClick={() => handleMensagem(contato.numero)}>
                Mensagem
              </button>
              <button onClick={() => handleEditar(index)}>Editar</button>
              <button
                className={styles.deletar}
                onClick={() => handleDeletar(index)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
