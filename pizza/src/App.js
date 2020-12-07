import "./App.css";
import PizzaCartoonForm from "./components/PizzaCartoonForm";

function App() {
  return (
    <div>
      <header>Pizza Pie</header>
      <h3>See What People Are Ordering Right Now!</h3>
      <PizzaCartoonForm />
      <footer></footer>
    </div>
  );
}

export default App;

// const [pizza, setPizza] = useState([]);
// const getPizzaData = async () => {
//   const resp = await axios.get(baseURL, config);
//   setPizza(resp.data.records);
// };
// getPizzaData();
// let pizzaObj = JSON.stringify(pizza, null, 2);

// function () {
//   ".toppingSelected".toggleClass("toppingSelected-active");
// });
