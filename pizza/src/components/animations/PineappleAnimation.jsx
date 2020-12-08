import "../../css/animations/PineappleAnimation.css";
import pineapplePic from "../../img/pineapple.png";

function PineappleAnimation() {
  return (
    <div>
      <img id="pineapple_1" alt="pineapple" src={pineapplePic} width="75" height="75"></img>
      <img id="pineapple_2" alt="pineapple" src={pineapplePic} width="75" height="75"></img>
      <img id="pineapple_3" alt="pineapple" src={pineapplePic} width="75" height="75"></img>
      <img id="pineapple_4" alt="pineapple" src={pineapplePic} width="75" height="75"></img>
      <img id="pineapple_5" alt="pineapple" src={pineapplePic} width="75" height="75"></img>
    </div>
  );
}

export default PineappleAnimation;
