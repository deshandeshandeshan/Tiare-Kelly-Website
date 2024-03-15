import "./About.css";
import tiareProfilePicture from "../assets/images/about-image.png";

const About = () => {
  return (
    <div className="about-page" id="about">
      <h2 className="about-page-intro">
        <span className="heading-italic">Tiare Kelly</span> is a Composer,
        Musician & Artist based in Tamaki Makaurau (Auckland)
      </h2>
      <div className="about-description">
        <p className="about-description-paragraph about-paragraph-1">
          Raised in Auckland city, New Zealand, Tiare Kelly began her career as
          a multi instrumentalist. Playing the electric guitar in the band
          ‘Daddy and the Dames’ at 14. Playing the double bass in a concert band
          and orchestra throughout her high school career.
        </p>
        <p className="about-description-paragraph about-paragraph-2">
          Completing her grade 7 Trinity college classical piano exam at 17 and
          studying under the incredible composer and pianist Jonathan Crayford.{" "}
        </p>
        <p className="about-description-paragraph about-paragraph-3">
          Studying classical South Indian music on the sitar and touring with
          the renowned Tabla player Basant Madhur. Tiare then proceeded to
          Wellington Massey university, taking on and soon graduating with a
          bachelor of Commercial Music majoring in Industry.{" "}
        </p>
        <p className="about-description-paragraph about-paragraph-4">
          From 2018 Tiare began playing guitar for pop sensation Benee, covering
          her first world tour in 2019 and featuring guitar in Benee’s latest
          album ‘Hey u x’.
        </p>
        <p className="about-description-paragraph about-paragraph-5">
          Over the course of her career she has also created and took part in
          many music business innovations. Creating and acting as one of the
          head coordinators for national music competition Bubble Bop. Hosting
          and holding gigs at local wellington venues, inside and outside
          university and Launching the promotion space She.
        </p>
      </div>
      <img className="about-profile-image" src={tiareProfilePicture} />
    </div>
  );
};

export default About;
