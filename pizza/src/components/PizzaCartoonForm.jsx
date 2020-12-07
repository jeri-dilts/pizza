// something about Webpack and multi-image handling
import "../css/PizzaCartoonForm.css";
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



/*
 setting up pizza state
*/
function PizzaCartoonForm() {
  const [pizza, setPizza] = useState({
    basil: false,
    blackOlives: false,
    greenPepper: false,
    mushrooms: false,
    pepperoni: false,
    pineapple: false,
    ham: false,
    name: "",
    img: "",
  });


  
  // handling the submission of pizza
  // sending pizza data to Airtable via POST with axios
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
      img: pizza.img,
    };
    // axios request
    await axios.post(baseURL, { fields }, config);
  };



  // toggle function for pizza topping icons
  const toggle = (e, bool, topping) => {
    e.preventDefault();

    if (bool === false) {
      setPizza((prev) => ({
        ...prev, // return an object, don't want to overwrite previous state (prev)
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
        <div className="toppings">
          <input
            type="image"
            className="zoom singleTopping"
            src={basilPic}
            alt="basil"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.basil, "basil")} // onClick the state is updated by a toggle
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={blackOlivesPic}
            alt="blackOlives"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.blackOlives, "blackOlives")}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={greenPepperPic}
            alt="greenPepper"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.greenPepper, "greenPepper")}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={mushroomPic}
            alt="mushroom"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.mushrooms, "mushrooms")}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pepperoniPic}
            alt="pepperoni"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.pepperoni, "pepperoni")}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pineapplePic}
            alt="pineapple"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.pineapple, "pineapple")}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={hamPic}
            alt="ham"
            width="75"
            height="75"
            onClick={(e) => toggle(e, pizza.ham, "ham")}
          ></input>
        </div>
        <img
          id="cheesePizza"
          src={cheesePizza}
          alt="cheese pizza"
          width="650"
          height="650"
        ></img>
        <div className="inputBoxStyle">
          <label htmlFor="name"></label>
          <input
            name="name"
            type="text"
            value={pizza.name}
            onChange={(e) => updateName(e)}
          />
        </div>
        <button type="submit" className="buttonStyle">
          Order This Beautiful Pizza Creation
        </button>
      </form>
    </div>
  );
}

export default PizzaCartoonForm;

// credit:
// <a href="https://www.vecteezy.com/free-vector/pizza-toppings">Pizza Toppings Vectors by Vecteezy</a> */
