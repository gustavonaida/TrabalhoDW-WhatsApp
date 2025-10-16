import styles from "./AgendaContatos.module.css";
import { useState } from "react";

// INTEGRAÇÃO AO SUPABASE E LOCALHOST
import { useEffect } from "react";
import { supabase, addContact, deleteContact } from "./supabaseClient";

export default function AgendaContatos({ contatos, setContatos, setNumeroSelecionado }) {
  const [nome, setNome] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  //-------------- Mostrar cores -----------------------------
  const [ativo, setAtivo] = useState(false);
  const [corPadrao, setCorPadrao] = useState("#1BC257");

  //-------------- Formatação: Telefone ------------------------
  const [numero, setNumero] = useState("");
  // 🔹 Buscar contatos do Supabase ao carregar
useEffect(() => {
  async function carregarContatos() {
    const { data, error } = await supabase.from("contacts").select("*");
    if (error) console.error("Erro ao buscar contatos:", error);
    else setContatos(data.map(c => ({
      nome: c.name,
      numero: c.phone_number,
      cor: "#1BC257" // usa cor padrão pois não existe no banco
    })));
  }
  carregarContatos();
}, []);


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

  const handlesNumero = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 11);
    setNumero(onlyDigits);
  };

  //------------------ Handles -----------------------------

  const handleSalvar = () => {
    if (!numero || numero.length < 11) {
      alert("Número inválido. Insira os 11 dígitos.");
      return;
    }

    const novoContato = { nome, numero, cor: corPadrao };

    if (editIndex !== null) {
      const atualizados = [...contatos];
      atualizados[editIndex] = novoContato;
      setContatos(atualizados);
      setEditIndex(null);
    } else {
      setContatos([...contatos, novoContato]);
    }
    //LOCALHOST
    addContact(nome, numero);

    setCorPadrao("#1BC257");
    setNome("");
    setNumero("");
  };

  const handleEditar = (index) => {
    setNome(contatos[index].nome);
    setNumero(contatos[index].numero);
    setCorPadrao(contatos[index].cor);
    setEditIndex(index);
  };

  const handleDeletar = (index) => {
    const atualizados = contatos.filter((_, i) => i !== index);
    setContatos(atualizados);

    // LOCALHOST E SUPABASE
    async function deletarDoSupabase(numero) {
    const { data, error } = await supabase
    .from("contacts")
    .select("id")
    .eq("phone_number", numero)
    .single();
    if (!error && data) await deleteContact(data.id);
}
  deletarDoSupabase(contatos[index].numero);

  };

  // Envia número para o GeradorLink ao invés de abrir o WhatsApp
  const handleMensagem = (numero) => {
    const cleaned = numero.replace(/\D/g, "");
    if (cleaned.length < 11) {
      alert("Número incompleto. Insira os 11 dígitos do telefone.");
      return;
    }
    setNumeroSelecionado(cleaned);
  };

  return (
    <div className={styles.containerBox}>
      <h2 className={styles.tittle}>Agenda de Contatos</h2>

      <div className={styles.doc}>
        <label>👤 Nome do contato</label>
        <div className={styles.NomeCor}>
          <input
            type="text"
            className={`${styles.input1} ${ativo ? styles.ativo : ""}`}
            placeholder="Nome"
            value={nome}
            onFocus={() => setAtivo(true)}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="color"
            value={corPadrao}
            onChange={(e) => setCorPadrao(e.target.value)}
            className={`${styles.inputColor} ${ativo ? styles.ativo : ""}`}
          />
        </div>

        <label>📞 Número</label>
        <input
          type="text"
          className={styles.input2}
          placeholder="(xx) xxxxx-xxxx"
          maxLength={16}
          value={formatInputNumero(numero)}
          onChange={handlesNumero}
        />

        <button className={styles.buttonPrepar} onClick={handleSalvar}>
          {editIndex !== null ? "Atualizar Contato" : "Salvar na Agenda"}
        </button>
      </div>

      <h3>Seus Contatos ({contatos.length})</h3>
      <div className={styles.listaContatos}>
        <div className={styles.AreaPessoas}>
          {contatos.map((contato, index) => {
            const isNumeroCompleto =
              contato.numero.replace(/\D/g, "").length === 11;

            return (
              <div key={index} className={styles.cardContato}>
                <div className={styles.info}>
                  <div
                    className={styles.corPessoa}
                    style={{ backgroundColor: contato.cor }}
                  ></div>

                  <div className={styles.infoNomeNumero}>
                    <strong >{contato.nome.length >15
                      ? contato.nome.substring(0,13)+"..."
                    : contato.nome}</strong>
                    <span>{formatInputNumero(contato.numero)}</span>
                  </div>
                </div>

                <div className={styles.acoes}>
                  <button
                    onClick={() => handleMensagem(contato.numero)}
                    className={styles.SendButton}
                    disabled={!isNumeroCompleto}
                    title={
                      !isNumeroCompleto
                        ? "Número incompleto"
                        : "Enviar para o Gerador de Link"
                    }
                  >
                    <strong>
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
                        className="lucide lucide-send"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                    </strong>
                  </button>

                  <button
                    onClick={() => handleEditar(index)}
                    className={styles.editButton}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                  </button>

                  <button
                    className={styles.deletar}
                    onClick={() => handleDeletar(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
