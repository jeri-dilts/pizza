import BasilAnimation from "./animations/BasilAnimation"
// import BlackOliveAnimation from "./animations/BlackOliveAnimation"
// import GreenPepperAnimation from "./animations/GreenPepperAnimation"
// import MushroomAnimation from "./animations/MushroomAnimation"
// import PepperoniAnimation from "./animations/PepperoniAnimation"
// import PineappleAnimation from "./animations/PineappleAnimation"
// import HamAnimation from "./animations/HamAnimation"


function Animations(props) {
  console.log(props);
  return (
    <div>
        <BasilAnimation />
        {/* <BlackOliveAnimation />
        <GreenPepperAnimation />
        <MushroomAnimation />
        <PepperoniAnimation />
        <PineappleAnimation />
        <HamAnimation /> */}
    </div>
  );
}

export default Animations;
