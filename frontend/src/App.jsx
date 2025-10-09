import AgendaContatos from "./AgendaContatos";
import GeradorLink from "./GeradorLink";
import Text from "./TextoSimples";
import "./App.css";
import ListaMensagens from "./ListaMensagens";

function App() {
  return (
    <>
      <div>
        <Text />
      </div>
      <div className="ButtonList">
        <ListaMensagens />
      </div>
      <div className="Container">
        <GeradorLink />
        <AgendaContatos />
      </div>
    </>
  );
}

export default App;
