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

function PizzaCartoonForm() {

  // setting state
  const [pizza, setPizza] = useState({
      basil: false,
      blackOlives: false,
      greenPepper: false,
      mushrooms: false,
      pepperoni: false,
      pineapple: false,
      ham: false,
      name: '',
      img: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a field object, to sent to airtable
    const fields = {
      basil : pizza.basil,
      blackOlives: pizza.blackOlives,
      greenPepper: pizza.greenPepper,
      mushrooms: pizza.mushrooms,
      pepperoni: pizza.pepperoni,
      pineapple: pizza.pineapple,
      ham: pizza.ham,
      name: pizza.name,
      img: pizza.img
    };
    // make our axios request
    // await axios.post(baseURL, { fields }, config);
  };

   const toggle = (bool,topping) =>{
        if(bool === false){
            setPizza((prev)=>({
               ...prev,[topping]:true // return an object, don't want to overwrite previous state
            }))
            
        }else{
            setPizza((prev)=>({
                ...prev,[topping]:false
        }))
    }
   }

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
            onClick={() => toggle(pizza.basil,'basil')} // onClick the state is updated by a toggle
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={blackOlivesPic}
            alt="blackOlives"
            width="75"
            height="75"
            onClick={() => toggle(pizza.blackOlives,'blackOlives')}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={greenPepperPic}
            alt="greenPepper"
            width="75"
            height="75"
            onClick={() => toggle(pizza.greenPepper,'greenPepper')}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={mushroomPic}
            alt="mushroom"
            width="75"
            height="75"
            onClick={() => toggle(pizza.mushrooms,'mushrooms')}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pepperoniPic}
            alt="pepperoni"
            width="75"
            height="75"
            onClick={() => toggle(pizza.pepperoni,'pepperoni')}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pineapplePic}
            alt="pineapple"
            width="75"
            height="75"
            onClick={() => toggle(pizza.pineapple,'pineapple')}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={hamPic}
            alt="ham"
            width="75"
            height="75"
            onClick={() => toggle(pizza.ham,'ham')}
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
            value='Name Your Pizza Here!'
            // onChange={(e) => setName(e.target.value)}
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
