import cheesePizza from "../img/cheesePizzaCropped.png";

function CreatedPizzaView(props){



    
    return <div>
        <div>
            <img
            className="cheesePizza"
            src={cheesePizza}
            alt="cheese pizza"
            width="650"
            height="650"
            ></img>
        </div>
        {/* {props.pizza.fields.name} */}
    
    </div>
}

export default CreatedPizzaView;