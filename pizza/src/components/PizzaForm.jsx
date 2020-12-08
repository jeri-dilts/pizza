// something about Webpack and multi-image handling
import "../css/PizzaForm.css";
import cheesePizza from "../img/cheesePizzaCropped.png";
import basilPic from "../img/basil.png";
import blackOlivesPic from "../img/blackOlives.png";
import greenPepperPic from "../img/greenPepper.png";
import mushroomPic from "../img/mushroom.png";
import pepperoniPic from "../img/pepperoni.png";
import pineapplePic from "../img/pineapple.png";
import hamPic from "../img/ham.png";
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import AnimationsMain from "./AnimationsMain";
import { Link } from "react-router-dom";



function PizzaForm() {
  //setting up pizza state
  const [pizza, setPizza] = useState({
    basil: false,
    blackOlives: false,
    greenPepper: false,
    mushrooms: false,
    pepperoni: false,
    pineapple: false,
    ham: false,
    name: "",
  });

  // sending pizza data to Airtable via POST with axios via submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a field object, to sent to airtable
    const fields = {
      name: pizza.name,
      basil: pizza.basil,
      blackOlives: pizza.blackOlives,
      greenPepper: pizza.greenPepper,
      mushrooms: pizza.mushrooms,
      pepperoni: pizza.pepperoni,
      pineapple: pizza.pineapple,
      ham: pizza.ham,
    };
    await axios.post(baseURL, { fields }, config); // axios request
  };

  // toggle function for pizza topping icons
  const toggle = (e, bool, topping) => {
    e.preventDefault();

    if (bool === false) {
      setPizza((prev) => ({
        ...prev, // ** return an object, don't want to overwrite previous state (prev)
        [topping]: true,
      }));
    } else {
      setPizza((prev) => ({
        ...prev,
        [topping]: false,
      }));
    }
  };

  // function to update the name of the pizza in state
  const updateName = (e) => {
    e.preventDefault();
    setPizza((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="toppingsToggle">
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={basilPic}
            alt="basil"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.basil, "basil")}
          ></input>
          <input
            type="image"  
            className="zoom singleToppingToggle"
            src={blackOlivesPic}
            alt="blackOlives"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.blackOlives, "blackOlives")}
          ></input>
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={greenPepperPic}
            alt="greenPepper"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.greenPepper, "greenPepper")}
          ></input>
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={mushroomPic}
            alt="mushroom"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.mushrooms, "mushrooms")}
          ></input>
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={pepperoniPic}
            alt="pepperoni"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.pepperoni, "pepperoni")}
          ></input>
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={pineapplePic}
            alt="pineapple"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.pineapple, "pineapple")}
          ></input>
          <input
            type="image"
            className="zoom singleToppingToggle"
            src={hamPic}
            alt="ham"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.ham, "ham")}
          ></input>
        </div>
        <img
          className="cheesePizza"
          src={cheesePizza}
          alt="cheese pizza"
          width="650"
          height="650"
        ></img>
        {/* ANIMATIONS */}
        {pizza.basil && <AnimationsMain topping="basil" />}{/* a guard operator */}
        {pizza.blackOlives && <AnimationsMain topping="blackOlives" />}
        {pizza.greenPepper && <AnimationsMain topping="greenPepper" />}
        {pizza.mushrooms && <AnimationsMain topping="mushroom" />}
        {pizza.pepperoni && <AnimationsMain topping="pepperoni" />}
        {pizza.pineapple && <AnimationsMain topping="pineapple" />}
        {pizza.ham && <AnimationsMain topping="ham" />}
        <div className="inputBox">
          <label htmlFor="name"></label>
          <input
            name="name"
            type="text"
            value={pizza.name}
            onChange={(e) => updateName(e)}
          />
        </div>
        {/* Is this the proper way to navigate to a new page? Should I use onClick? */}
        {/* <Link to="/order_confirmation"> */}
          <button className="buttonStyle" type="submit">
            Order This Beautiful Pizza Creation
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default PizzaForm;

// credit:
// <a href="https://www.vecteezy.com/free-vector/pizza-toppings">Pizza Toppings Vectors by Vecteezy</a> */
