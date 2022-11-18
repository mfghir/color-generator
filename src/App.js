import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#4169e1").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <section className="container">
        <h1>Color Generator</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#4169e1"
            className={`${error ? "error" : ""}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              {...color}
              key={index}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
