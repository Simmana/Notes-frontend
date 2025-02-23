import { Link } from "react-router-dom";
import { HOME } from "../services/consts";
function ErrorPage(){
    return (
        <div className="error-container">
          <div className="melting-box">
            <span className="error-text">Упс, что-то пошло не так</span>
          </div>
          <Link to={HOME}>
            <button className="error-back-button">
              Вернуться на главную
            </button>
          </Link>
        </div>
    );
}

export default ErrorPage;