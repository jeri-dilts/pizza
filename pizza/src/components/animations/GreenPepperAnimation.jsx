import "../../css/animations/GreenPepperAnimation.css";
import greenPepperPic from "../../img/greenPepper.png";

function GreenPepper() {
  return (
    <div>
      <img id="greenPepper_1" alt="green pepper" src={greenPepperPic} class="greenPepper"></img>
      <img id="greenPepper_2" alt="green pepper" src={greenPepperPic} class="greenPepper"></img>
      <img id="greenPepper_3" alt="green pepper" src={greenPepperPic} class="greenPepper"></img>
      <img id="greenPepper_4" alt="green pepper" src={greenPepperPic} class="greenPepper"></img>
      <img id="greenPepper_5" alt="green pepper" src={greenPepperPic} class="greenPepper"></img>
    </div>
  );
}

export default GreenPepper;
