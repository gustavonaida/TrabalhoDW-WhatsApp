import AgendaContatos from "./AgendaContatos";
import GeradorLink from "./GeradorLink";
import Text from "./TextoSimples";
import "./App.css";
import ListaMensagens from "./ListaMensagens";
import { useState } from "react";

function App() {
  const [contatos, setContatos] = useState([]);
  return (
    <>
      <div>
        <Text />
      </div>
      <div className="ButtonList">
        <ListaMensagens contatos={contatos} />
      </div>
      <div className="Container">
        <GeradorLink />
        <AgendaContatos contatos={contatos} setContatos={setContatos} />
      </div>
    </>
  );
}

export default App;
