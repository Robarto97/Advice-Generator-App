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
      <main className="text">
        {data && <p id="advice-id">Advice #{data.id}</p>}
        <div className="advice">
          {data && <h1 id="advice-content">{data.advice}</h1>}
        </div>
      </main>
      <div id="divider"></div>

      <button onClick={() => getAdvice()}>
        <div className="img"></div>
      </button>
    </div>
  );
}

export default App;
