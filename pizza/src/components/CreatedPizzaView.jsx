import AnimationsMain from "./AnimationsMain";
import "../css/CreatedPizzaView.css";
import cheesePizza from "../img/cheesePizzaCropped.png";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function CreatedPizzaView(props){

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // create a field object, to sent to airtable
        const fields = {
          name: props.pizza.fields.name,
          basil: props.pizza.fields.basil,
          blackOlives: props.pizza.fields.blackOlives,
          greenPepper: props.pizza.fields.greenPepper,
          mushrooms: props.pizza.fields.mushrooms,
          pepperoni: props.pizza.fields.pepperoni,
          pineapple: props.pizza.fields.pineapple,
          ham: props.pizza.fields.ham,
        };
        await axios.post(baseURL, { fields }, config); // axios request

        const resp = await axios.get(
            // query modified to get id of latest pizza
            `${baseURL}?maxRecords=1&&sort%5B0%5D%5Bfield%5D=createdTime&&sort%5B0%5D%5Bdirection%5D=desc`,
            config
          );
      
          let id = resp.data.records[0].id;
          history.push(`/order_confirmation=${id}`)
    };

    return <div> 
        <div className="container">
            <img className="cheesePizza" src={cheesePizza} alt="cheese pizza"></img>
            {props.pizza.fields.basil && <AnimationsMain topping="basil" />}
            {props.pizza.fields.blackOlives && <AnimationsMain topping="blackOlives" />}
            {props.pizza.fields.greenPepper && <AnimationsMain topping="greenPepper" />}
            {props.pizza.fields.mushrooms && <AnimationsMain topping="mushroom" />}
            {props.pizza.fields.pepperoni && <AnimationsMain topping="pepperoni" />}
            {props.pizza.fields.pineapple && <AnimationsMain topping="pineapple" />}
            <div className="pizzaNameContainer">
                <div className="pizzaName">{props.pizza.fields.name}</div>
                <form onSubmit={handleSubmit} className="galleryButtonStyle">
                    <button type="submit">
                        Order Now!
                    </button>
                </form>
            </div>
        </div>    
    </div>
}

export default CreatedPizzaView;