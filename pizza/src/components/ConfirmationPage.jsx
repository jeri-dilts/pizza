import { useParams } from "react-router-dom";
import "../css/Confirmation.css";

function ConfirmationPage(props) {

    const {id} = useParams();

    return <div className="confirmation">
    Thank You for your order! {id}
    </div>
}

export default ConfirmationPage;