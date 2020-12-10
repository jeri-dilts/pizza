import "../../css/toppings.css";
import pineapplePic from "../../img/pineapple.png";

function PineappleAnimation() {
  return (
    <div>
      <img id="pineapple_1" alt="pineapple" src={pineapplePic} className="toppingSize"></img>
      <img id="pineapple_2" alt="pineapple" src={pineapplePic} className="toppingSize"></img>
      <img id="pineapple_3" alt="pineapple" src={pineapplePic} className="toppingSize"></img>
      <img id="pineapple_4" alt="pineapple" src={pineapplePic} className="toppingSize"></img>
      <img id="pineapple_5" alt="pineapple" src={pineapplePic} className="toppingSize"></img>
    </div>
  );
}

export default PineappleAnimation;
