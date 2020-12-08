import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import CreatedPizzaView from "./CreatedPizzaView"

function GalleryPage() {

    const [pizzas, setPizzas] = useState([]);

    // Allows page to update when data is posted without refreshing the page
    const [toggleFetch, setToggleFetch] = useState(false);

    // will only run when things change
    useEffect(() => {

    const getPizzas = async () => {
      const resp = await axios.get(baseURL, config);
      // const resp = await axios.get(baseURL, config, {
      //   params: {
      //     _limit: 5
      //   }
      // })
      setPizzas(resp.data.records);
    };
    getPizzas();
  }, [toggleFetch]);

    return (
    <div>
      <CreatedPizzaView pizzas={pizzas}/>
    </div>
    )
}

export default GalleryPage;