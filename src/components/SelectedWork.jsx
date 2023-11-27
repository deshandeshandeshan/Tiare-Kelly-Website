import "./SelectedWork.css";

const SelectedWork = () => {
  return (
    <div className="selected-works-page" id="selected-works">
      <div className="selected-works-intro">
        <p className="selected-works-intro-text">
          Tiare Kelly is a Composer ,Musician & Artist based in Tamaki Makaurau
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
          <li className="selected-works-list-item">
            <p>TEA PROMO VIDEO</p>
            {/* Insert video content here*/}
            <p>COMPOSITION & ARRANGEMENT</p>
            <p>20.02.22</p>
          </li>
          <li className="selected-works-list-item">
            <p>COMP</p>
            {/* Insert video content here*/}
            <p>COMPOSITION & ARRANGEMENT</p>
            <p>15.11.22</p>
          </li>
          <li className="selected-works-list-item">
            <p>ENSEMBLE</p>
            {/* Insert video content here*/}
            <p>COMPOSITION & ARRANGEMENT</p>
            <p>06.04.21</p>
          </li>
          <li className="selected-works-list-item">
            <p>SHE: A SPACE FOR WOMXN</p>
            {/* Insert video content here*/}
            <p>CURATION</p>
            <p>04.10.21</p>
          </li>
          <li className="selected-works-list-item">
            <p>BENEE TOUR</p>
            {/* Insert video content here*/}
            <p>LIVE PERFORMANCES & TOUR: LEAD GUITAR</p>
            <p>20.01.18 - 17.09.23</p>
          </li>
          <li className="selected-works-list-item">
            <p>BALLSY: SHORT FILM</p>
            {/* Insert video content here*/}
            <p>COMPOSITION & ARRANGEMENT</p>
            <p>21.09.23</p>
          </li>
          <li className="selected-works-list-item">
            <p>TEA PROMO VIDEO</p>
            {/* Insert video content here*/}
            <p>COMPOSITION & ARRANGEMENT</p>
            <p>04.07.21</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectedWork;
