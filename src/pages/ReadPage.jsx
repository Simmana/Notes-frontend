import plusIcon from "../assets/images/add.svg";
import backIcon from "../assets/images/back.svg";
import updateIcon from "../assets/images/update.svg";
import deleteIcon from "../assets/images/delete.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { a } from "../services/axiosinstance";
import { Link } from "react-router-dom";
import { CREATE, DELETE, HOME, UPDATE } from "../services/consts";

function ReadPage(){

    const {id}=useParams();
    const[post,setPost]= useState({});

   useEffect(()=>{
       async function fetchPost() {
        try{
             const res = await a.get(`items/detail/${id}/`);
             setPost(res.data);
             console.log(res.data);
        }catch(e){
            console.log(e);
        }
       } fetchPost();
    },[id]);

    return(
        <div className="block">
            <div className="container">
            <Link to= {HOME}className="back-button">
                <img src={backIcon} alt="backIcon" />
            </Link>
            <h1 className="title_create">
                {post.name}
            </h1>
            <p className="description">{post.content}</p>
            <div className="bottom-container">
                <Link to={DELETE.substring(0, DELETE.length -3)+post.id} className="delete-button">
                    <img src={deleteIcon} alt="delete" />
                </Link>
                <Link to={UPDATE.substring(0, UPDATE.length-3)+post.id} className="update-button">
                    <img src={updateIcon} alt="update" />
                </Link>
                <Link to={CREATE} className="add-button">
                    <img src={plusIcon} alt="plus" />
                </Link>
            </div>
            </div>
        </div>
    );
}

export default ReadPage;