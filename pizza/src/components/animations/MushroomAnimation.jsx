import "../../css/animations/MushroomAnimation.css";
import mushroomPic from "../../img/mushroom.png";

function MushroomAnimation() {
  return (
    <div>
      <img id="mushroom_1" alt="mushroom" src={mushroomPic} className="mushroom"></img>
      <img id="mushroom_2" alt="mushroom" src={mushroomPic} className="mushroom"></img>
      <img id="mushroom_3" alt="mushroom" src={mushroomPic} className="mushroom"></img>
      <img id="mushroom_4" alt="mushroom" src={mushroomPic} className="mushroom"></img>
      <img id="mushroom_5" alt="mushroom" src={mushroomPic} className="mushroom"></img>
    </div>
  );
}

export default MushroomAnimation;
