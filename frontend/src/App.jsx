import "./App.css";
import GeradorLink from "./GeradorLink";
import AgendaContatos from "./AgendaContatos";
import Tema from "./Tema";

function App() {
  return (
    <>
      <div className="Container">
        <div className="ContainerBoxes">
          <GeradorLink />
          <AgendaContatos />
          <Tema />
        </div>
      </div>
    </>
  );
}

export default App;
