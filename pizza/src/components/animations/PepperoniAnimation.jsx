import "../../css/toppings.css";
import pepperoniPic from "../../img/pepperoni.png";

function PepperoniAnimation() {
  return (
    <div>
      <img id="pepperoni_1" alt="pepperoni" src={pepperoniPic} className="toppingSize"></img>
      <img id="pepperoni_2" alt="pepperoni" src={pepperoniPic} className="toppingSize"></img>
      <img id="pepperoni_3" alt="pepperoni" src={pepperoniPic} className="toppingSize"></img>
      <img id="pepperoni_4" alt="pepperoni" src={pepperoniPic} className="toppingSize"></img>
      <img id="pepperoni_5" alt="pepperoni" src={pepperoniPic} className="toppingSize"></img>
    </div>
  );
}

export default PepperoniAnimation;
