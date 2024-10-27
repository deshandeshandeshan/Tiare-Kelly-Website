import "./About.css";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import tiareProfilePicture from "../assets/images/about-image.jpeg";
import { TitleStaggeredReveal } from "./utilities/TitleScrollRevealStaggered";
import { Reveal } from "./utilities/ScrollRevealText";
// import { LinkReveal } from "./utilities/LinkReveal";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="about-page scroll-snap" id="about">
      <h2 className="about-page-intro">
        <TitleStaggeredReveal>
          Tiare Kelly is a Composer, Musician & Artist based in Tamaki Makaurau
          (Auckland)
        </TitleStaggeredReveal>
      </h2>
      <div
        className="about-profile-image"
        style={{ overflow: "hidden" }}
        ref={ref}
      >
        <motion.div
          className="about-profile-image"
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.2, delay: 0.45 }}
        >
          <img className="about-profile-image" src={tiareProfilePicture} />
        </motion.div>
      </div>
      <div className="about-description">
        <Reveal>
          <p className="about-description-paragraph about-paragraph-1">
            Raised in Auckland city, New Zealand, Tiare Kelly began her career
            as a multi instrumentalist. Playing the electric guitar in the band
            ‘Daddy and the Dames’ at 14. Playing the double bass in a concert
            band and orchestra throughout her high school career.
          </p>
        </Reveal>
        <Reveal>
          <p className="about-description-paragraph about-paragraph-2">
            Completing her grade 7 Trinity college classical piano exam at 17
            and studying under the incredible composer and pianist Jonathan
            Crayford.
          </p>
        </Reveal>
        <Reveal>
          <p className="about-description-paragraph about-paragraph-3">
            Studying classical South Indian music on the sitar and touring with
            the renowned Tabla player Basant Madhur. Tiare then proceeded to
            Wellington Massey university, taking on and soon graduating with a
            bachelor of Commercial Music majoring in Industry.
          </p>
        </Reveal>
        <Reveal>
          <p className="about-description-paragraph about-paragraph-4">
            From 2018 Tiare began playing guitar for pop sensation Benee,
            covering her first world tour in 2019 and featuring guitar in
            Benee’s latest album ‘Hey u x’.
          </p>
        </Reveal>
        <Reveal>
          <p className="about-description-paragraph about-paragraph-5">
            Over the course of her career she has also created and took part in
            many music business innovations. Creating and acting as one of the
            head coordinators for national music competition Bubble Bop. Hosting
            and holding gigs at local wellington venues, inside and outside
            university and Launching the promotion space She.
          </p>
        </Reveal>
      </div>
      <div className="about-contact-info">
        <Reveal>
          <h2 className="about-enquiries about-padding-bottom">
            For any enquiries please reach out!{" "}
            <a className="email-link" href="mailto:exampleemail@gmail.com">
              tiarekelly@gmail.com
            </a>
          </h2>
        </Reveal>
        <Reveal>
          <ul className="links-list">
            <li className="links-list-item">
              <a className="list-link">Soundcloud</a>
            </li>
            <li className="links-list-item">
              <a className="list-link">Bandcamp</a>
            </li>
            <li className="links-list-item">
              <a className="list-link">Instagram</a>
            </li>
            <li className="links-list-item">
              <a className="list-link">YouTube</a>
            </li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
