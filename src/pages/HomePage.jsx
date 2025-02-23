import plusIcon from "../assets/images/add.svg";
import settingsIcon from "../assets/images/settings.svg";
import { Link } from "react-router-dom";
import { CREATE, SWITCH } from "../services/consts";
import CardList from "../components/CardList";

function HomePage(){
    return(
        <div className="block">
            <div className="head">
                <h1 className="title">Заметки</h1>
                <Link to={SWITCH} className="settings-container">
                    <img src={settingsIcon} alt="settings" className="settingsImage"/>
                </Link>
                </div>
            <div className="container">
                <CardList/>
                <Link to={CREATE} className="add-button">
                <img src={plusIcon} alt="plus" />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;