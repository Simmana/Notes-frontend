import backIcon from "../assets/images/back.svg";
import sunIcon from "../assets/images/sun.svg";
import snowIcon from "../assets/images/snow.svg";
import { Link } from "react-router-dom";
import { HOME } from "../services/consts";
import { useTheme } from "../ThemeContext";

function SettingsPage(){
  const { setLightTheme, setDarkTheme } = useTheme();
    return(
        <div className="block">
          <div className="container">
            <Link to={HOME} className="back-button">
              <img src={backIcon} alt="backIcon" />
            </Link>
            <h1 className="title">
              Темы приложения
            </h1>
            <div className="theme_container">
              <div className="theme_item">
                <button className="snow_button" onClick={setLightTheme}>
                  <img className="theme_icon" src={snowIcon} alt="snowIcon" />
                  <h1 class="theme_title">Зима</h1>
                </button>
              </div>
              <div className="theme_item">
                <button className="sun_button" onClick={setDarkTheme}>
                  <img className="theme_icon" src={sunIcon} alt="sunIcon" />
                  <h1 class="theme_title">Лето</h1>
                </button>
              </div> 
            </div>   
            </div>
        </div>
    );
}

export default SettingsPage;