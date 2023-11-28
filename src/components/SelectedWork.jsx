import "./SelectedWork.css";
import horizon from "../assets/images/horizon.jpg";

const SelectedWork = () => {
  return (
    <div className="selected-works-page" id="selected-works">
      <div className="selected-works-intro">
        <p className="selected-works-intro-text">
          Tiare Kelly is a Composer, Musician & Artist based in Tamaki Makaurau
          (Auckland), these are her selected works.
        </p>
      </div>
      <div className="selected-works">
        <ul className="selected-works-headings-list">
          <li className="headings-list-item headings-list-item-a">
            <h3>TITLE</h3>
          </li>
          <li className="headings-list-item headings-list-item-b">
            <h3>SELECTED WORK</h3>
          </li>
          <li className="headings-list-item headings-list-item-c">
            <h3>TYPE</h3>
          </li>
          <li className="headings-list-item headings-list-item-d">
            <h3>DATE</h3>
          </li>
        </ul>
        <ul className="selected-works-list">
          <li className="selected-works-list-item selected-works-list-item-a">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">TEA PROMO VIDEO</p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">COMPOSITION & ARRANGEMENT</p>
            <p className="selected-work-date">20.02.22</p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-b">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">COMP</p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">COMPOSITION & ARRANGEMENT</p>
            <p className="selected-work-date">15.11.22</p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-c">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">ENSEMBLE</p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">COMPOSITION & ARRANGEMENT</p>
            <p className="selected-work-date">06.04.21</p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-d">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">
              SHE:
              <br />A SPACE FOR WOMXN
            </p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">CURATION</p>
            <p className="selected-work-date">04.10.21</p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-e">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">BENEE TOUR</p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">
              LIVE PERFORMANCES & TOUR: LEAD GUITAR
            </p>
            <p className="selected-work-date">
              20.01.18 - <br />
              17.09.23
            </p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-f">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">
              BALLSY:
              <br />
              SHORT FILM
            </p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">COMPOSITION & ARRANGEMENT</p>
            <p className="selected-work-date">21.09.23</p>
          </li>
          <li className="selected-works-list-item selected-works-list-item-g">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">TEA PROMO VIDEO</p>
            <img className="image selected-works-image" src={horizon} />
            <p className="selected-work-type">COMPOSITION & ARRANGEMENT</p>
            <p className="selected-work-date">04.07.21</p>
            <div className="selected-work-border-bottom" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectedWork;
