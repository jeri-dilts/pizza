import "../../css/animations/HamAnimation.css";
import hamPic from "../../img/ham.png";

function HamAnimation() {
  return (
    <div>
      <img id="ham_1" alt="ham" src={hamPic} width="75" height="75"></img>
      <img id="ham_2" alt="ham" src={hamPic} width="75" height="75"></img>
      <img id="ham_3" alt="ham" src={hamPic} width="75" height="75"></img>
      <img id="ham_4" alt="ham" src={hamPic} width="75" height="75"></img>
      <img id="ham_5" alt="ham" src={hamPic} width="75" height="75"></img>
    </div>
  );
}

export default HamAnimation;
