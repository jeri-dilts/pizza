import "./App.css";
import axios from "axios";
import { baseURL, config } from "./services";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState([]);

  const getPizzaData = async () => {
    const resp = await axios.get(baseURL, config);
    setPizza(resp.data.records);
  };
  getPizzaData();
  let pizzaObj = JSON.stringify(pizza, null, 2);

  return <div className="App">{pizzaObj}</div>;
}

export default App;
