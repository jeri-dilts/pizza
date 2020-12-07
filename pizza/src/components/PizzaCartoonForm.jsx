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
  const [basil, setBasil] = useState(false);
  const [blackOlives, setBlackOlives] = useState(false);
  const [greenPepper, setGreenPepper] = useState(false);
  const [mushrooms, setMushrooms] = useState(false);
  const [pepperoni, setPepperoni] =  useState(false);
  const [pineapple, setPineapple] = useState(false);
  const [ham, setHam] = useState(false);
  const [name, setName] = useState(false);
//   const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a field object, to sent to airtable
    const fields = {
      name: name, // property shorthand
      basil,
      blackOlives,
      greenPepper,
      mushrooms,
      pepperoni,
      pineapple,
      ham,
    //   img
    };
    // make our axios request
    await axios.post(baseURL, { fields }, config);
  };

   const toggleClass = (e) =>{
        if(e === false){
            setBasil(true) // limited to only setting the Basil state
        }else{
            setBasil(false)
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
            // value={basil} -- I don't think this is needed here
            onClick={(e) => toggleClass(e.target.value)} // onClick the state is updated by a toggle
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={blackOlivesPic}
            alt="blackOlives"
            width="75"
            height="75"
            value={blackOlives}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={greenPepperPic}
            alt="greenPepper"
            width="75"
            height="75"
            value={greenPepper}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={mushroomPic}
            alt="mushroom"
            width="75"
            height="75"
            value={mushrooms}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pepperoniPic}
            alt="pepperoni"
            width="75"
            height="75"
            value={pepperoni}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={pineapplePic}
            alt="pineapple"
            width="75"
            height="75"
            value={pineapplePic}
          ></input>
          <input
            type="image"
            className="zoom singleTopping"
            src={hamPic}
            alt="ham"
            width="75"
            height="75"
            value={ham}
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
          <label htmlFor="name">Pizza Name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" class="buttonStyle">
          Order This Beautiful Pizza Creation
        </button>
      </form>
    </div>
  );
}

export default PizzaCartoonForm;

// credit:
// <a href="https://www.vecteezy.com/free-vector/pizza-toppings">Pizza Toppings Vectors by Vecteezy</a> */
