import Dictionary from "./Dictionary";

import './App.css';

export default function App() {
  return (
    <div className="App">\
      <div className="container">
        <header className="App-header">
      Dictionary
        </header>
        <main>
        <Dictionary defaultKeyword="wizard"/>
        </main>
        <footer className="App-footer">
        <small>
          This project was coded by{" "}
          <a
          href="https://www.linkedin.com/in/kslezakova"
          target="_blank"
          rel="noreferrer"
          >
          Katerina Slezakova
          </a> and is open-sourced on <a
          href="https://github.com/KaterinaSlezakova/dictionary-project"
          target="_blank"
          rel="noreferrer"
          > GitHub
          </a>{" "}
          and hosted on
          <a
          href="https://friendly-wright-ce514f.netlify.app/"
          target="_blank"
          rel="noreferrer"
          > Netlify.
          </a>
        </small>
        </footer>
      </div>
    </div>
  );
}

 
