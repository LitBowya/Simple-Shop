import { Link } from "react-router-dom"

const NavLinks = () => {
  return (
    <div>
      <div className="navlinks__container">
        <div className="navlinks__container-list">
          <div className="navlinks__list">
            <Link to="/" className="navlink">
              <i className="fa-solid fa-house fa-lg"></i>
            </Link>
            <Link to="/location" className="navlink">
              <i className="fa-solid fa-location-dot fa-lg"></i>
            </Link>
            <Link to="/phonepage" className="navlink">
              <i className="fa fa-mobile fa-lg"></i>
            </Link>
            <Link to="/pcpage" className="navlink">
              <i className="fa fa-computer fa-lg"></i>
            </Link>
          </div>
        </div>
        <div className="navlinks__contact">
          <a href="https://wa.me/+233540483399">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="tel:+233540483399">
            <i className="fa-solid fa-phone-volume"></i>
          </a>
          <a href="mailto:contact@yussifmohammed869@gmail.com ">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavLinks