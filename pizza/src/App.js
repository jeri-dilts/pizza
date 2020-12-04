import "./App.css";
import axios from "axios";
import { baseURL, config } from "../services";

function App() {
  const getPizzaData = async () => {
    const resp = await axios.get(baseURL, config);
    pizzaData = resp.data.records;
  };

  return <div className="App"></div>;
}

export default App;
