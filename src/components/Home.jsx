import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="page-1">
        <h1 className="home-heading">Tiare Kelly</h1>
        <div className="sticky-menu">
          <ul className="menu-list">
            <li className="menu-list-item"></li>
            <li className="menu-list-item">Work</li>
            <li className="menu-list-item">About</li>
            <li className="menu-list-item">Extras</li>
          </ul>
        </div>
        <div className="contact-details">
          <ul>
            <li>Contact</li>
            <li>+64 000 000 0000</li>
            <li>tiarekelly@gmail.com</li>
          </ul>
        </div>
        <div className="page-2"></div>
      </div>
    </div>
  );
};

export default Home;
