import backIcon from "../assets/images/back.svg"
import UpdateCard from "../components/UpDateCard";
function UpdatePage(){
    return(
        <div>
            <div className="block">
                <div className="container">
                <button className="back-button">
                    <img src={backIcon} alt="backIcon" />
                </button>
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