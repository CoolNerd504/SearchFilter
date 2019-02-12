import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./api";
import "./styles.css";

function App() {
  const [state, setState] = useState(data);
  const [text, setText] = useState("");
  function searchFilter({ target: { value } }) {
    if (!value.length) return setState(data);
    const inputText = value.toLowerCase();
    const filteredList = state.filter(data => {
      const _title = data.title.toLowerCase();
      return _title.indexOf(inputText) > -1;
    });
    setState(filteredList);
  }
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={searchFilter} />
      {state.map(data => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
