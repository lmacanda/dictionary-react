import "./App.css";
import Dictionary from "./dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">DICTIONARY</header>
        <main className="main__container pt-0">
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Laura Pantano</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
