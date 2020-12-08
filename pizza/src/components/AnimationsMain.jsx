import BasilAnimation from "./animations/BasilAnimation";
import BlackOliveAnimation from "./animations/BlackOliveAnimation";
import GreenPepperAnimation from "./animations/GreenPepperAnimation";
import MushroomAnimation from "./animations/MushroomAnimation"
// import PepperoniAnimation from "./animations/PepperoniAnimation"
// import PineappleAnimation from "./animations/PineappleAnimation"
// import HamAnimation from "./animations/HamAnimation"

function AnimationsMain(props) {
  // would like to destructure props for fun

  return (
    <div>
      {props.topping === "basil" && <BasilAnimation />}
      {props.topping === "blackOlives" && <BlackOliveAnimation />}
      {props.topping === "greenPepper" && <GreenPepperAnimation />}
      {props.topping === "mushroom" && <MushroomAnimation />}
    </div>
  );
}

export default AnimationsMain;
