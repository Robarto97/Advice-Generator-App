import { useEffect, useState } from "react";
import "./styles.scss";

function App() {
  const [data, setData] = useState("");
  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData(data.slip));
  };
  useEffect(getAdvice, []);
  return (
    <div className="App">
      <main>
        <div className="text">
          {data && <p id="advice-id">Advice #{data.id}</p>}
          <div className="advice">
            {data && <h1 id="advice-content">{data.advice}</h1>}
          </div>
        </div>
        <div id="divider"></div>

        <button id="buttonAdvice" aria-label="Advice" onClick={() => getAdvice()}>
          <div className="img"></div>
        </button>
      </main>
    </div>
  );
}

export default App;
