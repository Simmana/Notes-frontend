import { Link, useNavigate, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg"
import { a } from "../services/axiosinstance";
import { HOME } from "../services/consts";

function DeletePage(){

    const {id}=useParams();
    const navigate=useNavigate();

    async function handleDelete(){
        try{
            await a.delete(`items/delete/${id}/`);
            navigate(HOME);
        }catch(e){
            console.log(e);
        }
    }
    return(
        <div className="block">
            <div className="container">
              <Link to={HOME} className="back-button">
                  <img src={backIcon} alt="backIcon" />
              </Link>
              <h1 className="title_create">
                  Удалить заметку
              </h1>
              <h4 className="sub-text">Вы уверены, что хотите удалить 
              заметку? Это действие необратимо</h4>
              <button onClick={handleDelete} className="delete-submit-button" type="submit">Удалить</button>
            </div>
        </div>
    );
}

export default DeletePage;