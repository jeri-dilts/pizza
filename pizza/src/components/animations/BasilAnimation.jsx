import "../../css/toppings.css";
import basilPic from "../../img/basil.png";

function BasilAnimation() {
  return (
    <div>
      <img id="basil_1" alt="basil" src={basilPic} className="toppingSize"></img>
      <img id="basil_2" alt="basil" src={basilPic} className="toppingSize"></img>
      <img id="basil_3" alt="basil" src={basilPic} className="toppingSize"></img>
      <img id="basil_4" alt="basil" src={basilPic} className="toppingSize"></img>
      <img id="basil_5" alt="basil" src={basilPic} className="toppingSize"></img>
    </div>
  );
}

export default BasilAnimation;
