import "./App.css";
import GeradorLink from "./GeradorLink";
import AgendaContatos from "./AgendaContatos";

function App() {
  return (
    <>

    
      <div className="Container">
        <div className="ContainerBoxes">
          <GeradorLink />
          <AgendaContatos />
        </div>
      </div>
    </>
  );
}

export default App;
