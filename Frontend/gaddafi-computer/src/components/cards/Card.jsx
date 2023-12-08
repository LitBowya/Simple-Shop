
import { Link } from "react-router-dom";

const Card = ({ imageUrl, name, price, slug }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageUrl} className="card-img-top" alt={name} />
      </div>
      <div className="card__body">
        <p className="card__title">{name}</p>
        <p className="card__text text-muted">GHc {price}</p>
      </div>
      <div className="card__footer">
        <Link to={`/${slug}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
