import BasilAnimation from "./animations/BasilAnimation";
import BlackOliveAnimation from "./animations/BlackOliveAnimation";
import GreenPepperAnimation from "./animations/GreenPepperAnimation";
import MushroomAnimation from "./animations/MushroomAnimation"
import PepperoniAnimation from "./animations/PepperoniAnimation"
import PineappleAnimation from "./animations/PineappleAnimation"

function AnimationsMain(props) {
  // would like to destructure props for fun

  return (
    <div className="placingToppings">
      {props.topping === "basil" && <BasilAnimation />}
      {props.topping === "blackOlives" && <BlackOliveAnimation />}
      {props.topping === "greenPepper" && <GreenPepperAnimation />}
      {props.topping === "mushroom" && <MushroomAnimation />}
      {props.topping === "pepperoni" && <PepperoniAnimation />}
      {props.topping === "pineapple" && <PineappleAnimation />}
    </div>
  );
}

export default AnimationsMain;
