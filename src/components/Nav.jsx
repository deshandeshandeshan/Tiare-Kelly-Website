import "./Nav.css";
import { Link } from "react-scroll";
import { GoDotFill } from "react-icons/go";

const Nav = () => {
  return (
    <div className="sticky-nav">
      <ul className="nav-list nav-grid">
        <li className="nav-list-item">
          <Link
            className="nav-list-color icon-center"
            activeClass="active"
            spy={true}
            to="home"
            smooth={true}
            offset={0}
            duration={900}
          >
            <GoDotFill />
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-list-color"
            activeClass="active"
            spy={true}
            to="selected-works"
            smooth={true}
            offset={-50}
            duration={900}
          >
            Work
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-list-color"
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            offset={-50}
            duration={900}
          >
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-list-color"
            activeClass="active"
            spy={true}
            to="extras"
            smooth={true}
            offset={-50}
            duration={900}
          >
            Extras
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
