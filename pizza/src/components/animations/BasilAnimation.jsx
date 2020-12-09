import "../../css/animations/BasilAnimation.css";
import basilPic from "../../img/basil.png";

function BasilAnimation() {
  return (
    <div>
      <img id="basil_1" alt="basil" src={basilPic} class="basil"></img>
      <img id="basil_2" alt="basil" src={basilPic} class="basil"></img>
      <img id="basil_3" alt="basil" src={basilPic} class="basil"></img>
      <img id="basil_4" alt="basil" src={basilPic} class="basil"></img>
      <img id="basil_5" alt="basil" src={basilPic} class="basil"></img>
    </div>
  );
}

export default BasilAnimation;
