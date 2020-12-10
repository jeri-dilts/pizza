import AnimationsMain from "./AnimationsMain";
import "../css/CreatedPizzaView.css";
import cheesePizza from "../img/cheesePizzaCropped.png";

function CreatedPizzaView(props){
    // console.log(props.pizza.fields);
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
            </div>
        </div>    
    </div>
}

export default CreatedPizzaView;