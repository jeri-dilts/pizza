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
      const resp = await axios.get(`${baseURL}?maxRecords=5`, config);
      setPizzas(resp.data.records);
    };
    getPizzas();
  }, [toggleFetch]);

    return (
    <div>{
      pizzas.map((pizza, i)=>(
        <CreatedPizzaView key={i} pizza={pizza}/>
      ))
    }
      
    </div>
    )
}

export default GalleryPage;