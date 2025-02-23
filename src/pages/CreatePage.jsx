import backIcon from "../assets/images/back.svg"
import CardForm from "../components/CardForm";
import { Link } from "react-router-dom";
import { HOME } from "../services/consts";

function CreatePage(){
    return(
        <div>
            <div className="block">
                <div className="container">
                    <Link to={HOME} className="back-button">
                        <img src={backIcon} alt="backIcon" />
                    </Link>
                    <h1 className="title_create">
                        Создать заметку
                    </h1>
                    <CardForm />
                </div>
            </div>
        </div>
    )
}

export default CreatePage;