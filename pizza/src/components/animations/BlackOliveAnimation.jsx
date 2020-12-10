import "../../css/toppings.css";
import blackOlivesPic from "../../img/blackOlives.png";

function BlackOliveAnimation() {
  return (
    <div>
      <img id="blackOlive_1" alt="black olive" src={blackOlivesPic} className="toppingSize"></img>
      <img id="blackOlive_2" alt="black olive" src={blackOlivesPic} className="toppingSize"></img>
      <img id="blackOlive_3" alt="black olive" src={blackOlivesPic} className="toppingSize"></img>
      <img id="blackOlive_4" alt="black olive" src={blackOlivesPic} className="toppingSize"></img>
      <img id="blackOlive_5" alt="black olive" src={blackOlivesPic} className="toppingSize"></img>
    </div>
  );
}

export default BlackOliveAnimation;
