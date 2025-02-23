import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosinstance";
import { HOME } from "../services/consts";
import { useState } from "react";

function CardForm(){

    const [content, setContent]= useState("");
    const [name, setName]=useState("");
    const navigate=useNavigate();


    async function  handleSubmit(e) {
        //event=e
        e.preventDefault(); // Останавливаем стандартное поведение формы (перезагрузку страницы)
        try{
          await a.post('items/post/',{content,name});
          navigate(HOME);
        }catch(err){
            console.log(err);
        }
    }

//onSubmit=при нажатии 

    return (
        <form className="form" onSubmit={handleSubmit}> 
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="form-control" 
            placeholder="Название заметки..." />
            <textarea 
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            className="form-control" 
            rows="30" cols="10" 
            placeholder="Напишите вашу заметку.." >
            </textarea>
            <button className="submit-button" type="submit">Сохранить</button>
        </form>
    );
}

export default CardForm;