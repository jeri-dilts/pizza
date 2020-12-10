import cheesePizza from "../img/cheesePizzaCropped.png";
import AnimationsMain from "./AnimationsMain";

function CreatedPizzaView(props){
    // console.log(props.pizza.fields);
    // I think this cheese pizza needs to only be rendered once in the component above
    return <div> 
        <div className="container">
            <img
            className="cheesePizza"
            src={cheesePizza}
            alt="cheese pizza"
            ></img>
            {props.pizza.fields.basil && <AnimationsMain topping="basil" />}
            {props.pizza.fields.blackOlives && <AnimationsMain topping="blackOlives" />}
            {props.pizza.fields.greenPepper && <AnimationsMain topping="greenPepper" />}
            {props.pizza.fields.mushrooms && <AnimationsMain topping="mushroom" />}
            {props.pizza.fields.pepperoni && <AnimationsMain topping="pepperoni" />}
            {props.pizza.fields.pineapple && <AnimationsMain topping="pineapple" />}
            <div className="pizzaName">{props.pizza.fields.name}</div>
        </div>    
    </div>
}

export default CreatedPizzaView;