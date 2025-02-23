
import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";
import { Link } from "react-router-dom";
import IsFinished from "./IsFinished";

function CardItem({post}){
  return (
    <div className="card-container">
      <Link to={READ.substring(0, READ.length - 3) + post.id} className="card-item">
        <h3 className="card_item__title">
          {post.name}
        </h3>
        <span className="card-item__date">
          {formatDate(post.created_at)}
        </span>
      </Link>
      <IsFinished postId={post.id} />
    </div>
  );
}
export default CardItem;