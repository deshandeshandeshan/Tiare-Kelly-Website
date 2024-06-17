import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="sticky-nav">
      <ul className="nav-list nav-grid">
        <li className="nav-list-item">
          <Link
            className="nav-list-link nav-list-color nav-list-home"
            activeClass="active"
            spy={true}
            to="home"
            smooth={true}
            offset={0}
            duration={1200}
          >
            <div className="nav-list-icon" />
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-list-link nav-list-color nav-list-selected-works"
            activeClass="active"
            spy={true}
            to="selected-work-image"
            smooth={true}
            offset={0}
            duration={1200}
          >
            WORK
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-list-link nav-list-color nav-list-about"
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            offset={0}
            duration={1200}
          >
            ABOUT
          </Link>
        </li>
        {/* <li className="nav-list-item">
          <Link
            className="nav-list-color"
            activeClass="active"
            spy={true}
            to="extras"
            smooth={true}
            offset={0}
            duration={1200}
          >
            EXTRAS
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
