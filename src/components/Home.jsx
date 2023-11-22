import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-page">
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
        <div className="works-page">
          <div className="work-intro">
            <p className="work-intro-text">
              Tiare Kelly is a Composer ,Musician & Artist based in Tamaki
              Makaurau (Auckland), these are her selected works.
            </p>
          </div>
          <div className="work-headings">
            <ul className="work-headings-list">
              <li className="work-headings-list-item">
                <h3>TITLE</h3>
              </li>
              <li className="work-headings-list-item">
                <h3>SELECTED WORK</h3>
              </li>
              <li className="work-headings-list-item">
                <h3>TYPE</h3>
              </li>
            </ul>
          </div>
          <div className="selected-works">
            <ul className="selected-works-list">
              <li className="selected-works-list-item">
                <p>TEA PROMO VIDEO</p>
                {/* Insert video content here*/}
                <p>COMPOSITION & ARRANGEMENT</p>
              </li>
              <li className="selected-works-list-item">
                <p>COMP</p>
                {/* Insert video content here*/}
                <p>COMPOSITION & ARRANGEMENT</p>
              </li>
              <li className="selected-works-list-item">
                <p>ENSEMBLE</p>
                {/* Insert video content here*/}
                <p>COMPOSITION & ARRANGEMENT</p>
              </li>
              <li className="selected-works-list-item">
                <p>SHE: A SPACE FOR WOMXN</p>
                {/* Insert video content here*/}
                <p>CURATION</p>
              </li>
              <li className="selected-works-list-item">
                <p>BENEE TOUR</p>
                {/* Insert video content here*/}
                <p>LIVE PERFORMANCES & TOUR: LEAD GUITAR</p>
              </li>
              <li className="selected-works-list-item">
                <p>BALLSY: SHORT FILM</p>
                {/* Insert video content here*/}
                <p>COMPOSITION & ARRANGEMENT</p>
              </li>
              <li className="selected-works-list-item">
                <p>TEA PROMO VIDEO</p>
                {/* Insert video content here*/}
                <p>COMPOSITION & ARRANGEMENT</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-page">
          <h2 className="about-page-intro">
            Tiare Kelly is a Composer ,Musician & Artist based in Tamaki
            Makaurau (Auckland)
          </h2>
          <p className="about-page-description">
            Raised in Auckland city, New Zealand, Tiare Kelly began her career
            as a multi instrumentalist. Playing the electric guitar in the band
            ‘Daddy and the Dames’ at 14.Playing the double bass in a concert
            band and orchestra throughout her high school career. <br />
            Completing her grade 7 Trinity college classical piano exam at 17
            and studying under the incredible composer and pianist Jonathan
            Crayford. <br />
            Studying classical South Indian music on the sitar and touring with
            the renowned Tabla player Basant Madhur. Tiare then proceeded to
            Wellington Massey university, taking on and soon graduating with a
            bachelor of Commercial Music majoring in Industry. <br />
            From 2018 Tiare began playing guitar for pop sensation Benee,
            covering her first world tour in 2019 and featuring guitar in
            Benee’s latest album ‘Hey u x’. <br />
            Over the course of her career she has also created and took part in
            many music business innovations. Creating and acting as one of the
            head coordinators for national music competition Bubble Bop. Hosting
            and holding gigs at local wellington venues, inside and outside
            university and Launching the promotion space She.
          </p>
        </div>
        <div className="extras-page"></div>
      </div>
    </div>
  );
};

export default Home;
