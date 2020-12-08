import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";

function GalleryPage() {

    const [pizzas, setPizzas] = useState([]);

    // Allows page to update when data is posted without refreshing the page
    const [toggleFetch, setToggleFetch] = useState(false);

    // will only run when things change
    useEffect(() => {

    const getPizzas = async () => {
      const resp = await axios.get(baseURL, config);
      setPizzas(resp.data.records);
    };
    getPizzas();
  }, [toggleFetch]);

    return (
    <div>{
        pizzas.map((pizza, i)=>(
            <p key={i}>{pizza.fields.name}</p>
        ))
    }
    </div>
    )
}

export default GalleryPage;