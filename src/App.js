import "./App.css";
import Dictionary from "./dictionary/Dictionary";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <div className="container">
      <header className="text-center">
        <h1 className="mt-5">DICTIONARY</h1>
      </header>
      <main className="main__container pt-0">
        <Dictionary />
      </main>
      <footer className="text-center mt-3 mb-5">
        <a
          href="https://github.com/lmacanda/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </footer>
    </div>
  );
}

export default App;
