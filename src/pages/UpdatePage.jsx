import backIcon from "../assets/images/back.svg"
import UpdateCard from "../components/UpDateCard";
import { Link } from "react-router-dom";
import { HOME } from "../services/consts";
function UpdatePage(){
    return(
        <div>
            <div className="block">
                <div className="container">
                <Link to={HOME} className="back-button">
                    <img src={backIcon} alt="backIcon" />
                </Link>
                <h1 className="title_create">
                    Изменить заметку
                </h1>
                    <UpdateCard />
                </div>
            </div>
        </div>
    )
}

export default UpdatePage;