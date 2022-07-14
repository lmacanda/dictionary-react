import "./App.css";
import Dictionary from "./dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">
          <h1 className="mt-5">DICTIONARY</h1>
        </header>
        <main className="main__container pt-0">
          <Dictionary />
        </main>
        <footer className="text-center mt-3 mb-5">
          <small>
            {" "}
            <a
              href="https://github.com/lmacanda/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code,
            </a>{" "}
            by Laura Pantano
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
