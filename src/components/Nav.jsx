import "./Nav.css";

const Nav = () => {
  return (
    <div className="sticky-nav">
      <ul className="nav-list nav-grid">
        <li className="nav-list-item">Home</li>
        <li className="nav-list-item">Work</li>
        <li className="nav-list-item">About</li>
        <li className="nav-list-item">Extras</li>
      </ul>
    </div>
  );
};

export default Nav;
