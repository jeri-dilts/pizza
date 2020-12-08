import BasilAnimation from "./animations/BasilAnimation";
// import BlackOliveAnimation from "./animations/BlackOliveAnimation"
// import GreenPepperAnimation from "./animations/GreenPepperAnimation"
// import MushroomAnimation from "./animations/MushroomAnimation"
// import PepperoniAnimation from "./animations/PepperoniAnimation"
// import PineappleAnimation from "./animations/PineappleAnimation"
// import HamAnimation from "./animations/HamAnimation"

function Animations(props) {
  // would like to destructure props for fun
  console.log(props)
  return (
    <div>
      if({props.topping} === 'basil'){<BasilAnimation />}
      {/* if({props.topping} === 'blackOlive'){<BlackOliveAnimation />}
      if({props.topping} === 'greenPepper'){<GreenPepperAnimation />}
      if({props.topping} === 'mushroom'){<MushroomAnimation />}
      if({props.topping} === 'pepperoni'){<PepperoniAnimation />}
      if({props.topping} === 'pineapple'){<PineappleAnimation />}
      if({props.topping} === 'ham'){<HamAnimation />} */}
    </div>
  );
}

export default Animations;
