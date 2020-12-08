import "./App.css";
import PizzaForm from "./components/PizzaForm";
import GalleryPage from "./components/GalleryPage";
import Nav from "./components/Nav";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">
        <header>Pizza Pie</header>
      </Link>
      <Nav />
      <Route exact path="/">
        <PizzaForm />
      </Route>
      <Route path="/seewhatpeopleareorderingnow">
        <GalleryPage />
      </Route>
      <footer>Coding by yours truly. Jeri Dilts.</footer>
    </div>
  );
}

export default App;
