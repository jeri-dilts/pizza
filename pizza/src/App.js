import "./App.css";
import PizzaForm from "./components/PizzaForm";
import GalleryPage from "./components/GalleryPage";
import ConfirmationPage from "./components/ConfirmationPage";
import Nav from "./components/Nav";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/"><header>Pizza Pie</header></Link>
      <Nav />
      <Switch>
        <Route path="/" exact component={PizzaForm} />
        <Route path="/see_what_people_are_ordering_now" component={GalleryPage} />
        <Route path="/order_confirmation" component={ConfirmationPage} />
      </Switch>
      <footer>Coding by yours truly. Jeri Dilts.</footer>
    </div>
  );
}

export default App;
