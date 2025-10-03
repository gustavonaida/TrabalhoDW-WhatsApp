import AgendaContatos from "./AgendaContatos";
import GeradorLink from "./GeradorLink";
import Tema from "./Tema"; 
import "./App.css";

function App() {
  return (<>
  <div className="ButtonTema">
  <Tema/>
  </div>
    <div className="Container">
      <GeradorLink />
      <AgendaContatos />
    </div>
    </>
  );
}

export default App;
