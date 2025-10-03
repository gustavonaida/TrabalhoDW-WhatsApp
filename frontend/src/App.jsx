import AgendaContatos from "./AgendaContatos";
import GeradorLink from "./GeradorLink";
import Tema from "./Tema"; 
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Tema />   {/* Botão de tema */}
      <GeradorLink />
      <AgendaContatos />
    </div>
  );
}

export default App;
