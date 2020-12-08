import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to={"/seewhatpeopleareorderingnow"}>
        <h3>See What People Are Ordering Right Now!</h3>
      </Link>
    </div>
  );
}

export default Nav;
