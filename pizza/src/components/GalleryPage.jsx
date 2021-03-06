import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import CreatedPizzaView from "./CreatedPizzaView";

function GalleryPage() {
  const [pizzas, setPizzas] = useState([]);

  // Allows page to update when data is posted without refreshing the page --- check to make sure this is working
  const [toggleFetch, setToggleFetch] = useState(false);

  // will only run when things change
  useEffect(() => {
    const getPizzas = async () => {
      const resp = await axios.get(
        // query modified to get 5 latest pizzas
        `${baseURL}?maxRecords=5&&sort%5B0%5D%5Bfield%5D=createdTime&&sort%5B0%5D%5Bdirection%5D=desc`,
        config
      );
      setPizzas(resp.data.records);
    };
    getPizzas();
  }, [toggleFetch]);

  return (
    <div>
      {pizzas.map((pizza, i) => (
        <CreatedPizzaView key={i} pizza={pizza} setToggleFetch={setToggleFetch}/>
      ))}
    </div>
  );
}

export default GalleryPage;
