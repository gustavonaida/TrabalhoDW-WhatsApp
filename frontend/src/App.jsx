import "./App.css";
import GeradorLink from "./GeradorLink";
import AgendaContatos from "./AgendaContatos";

function App() {
  return (
    <>

    
      <div className="Container">
          <h1 className="Logo">WhatsHub</h1>
        <div className="ContainerBoxes">
          <GeradorLink />
          <AgendaContatos />
        </div>
      </div>
    </>
  );
}

export default App;
