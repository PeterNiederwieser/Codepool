import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import officePurple from "../../assets/landing/officePurple.png";
import officeBlue from "../../assets/landing/officeBluePurple.png";
import BusinessBLue from "../../assets/landing/businessImg.jpg";
import Sigrid from "../../assets/landing/sigird.png";
import Lydia from "../../assets/Lydia.png";
import Isabella from "../../assets/landing/Isabella.png";
import john from "../../assets/landing/johnTravolta.gif";
import Logo from "../../assets/codeCool_Logo.png";

import { Link } from "react-router-dom";

import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilCodeBranch } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilDatabase } from "@iconscout/react-unicons";
import { UilLaptop } from "@iconscout/react-unicons";
import Footer from "../../Components/Footer";

import "./LandingPage.css";

import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  const ref = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing-page-container">
      <Parallax pages={5} ref={ref} className="background-landing">
        <ParallaxLayer
          className="first-image"
          offset={0}
          speed={1}
          factor={1.4}
          onClick={() => ref.current.scrollTo(1)}
          style={{
            backgroundImage: `url(${officePurple})`,
            backgroundSize: "cover",
          }}
        >
          <div data-aos="zoom-in" className="header-landing">
            <h1 data-aos="flip-up">
              Gestalten wir Ihre digitale Zukunft gemeinsam!
            </h1>
            <h2 data-aos="flip-down">Unsere IT-Talente sind bereit</h2>
            <Link to="/students">
              <button
                style={{
                  color: "black",
                  backgroundColor: "white",
                  paddingInline: "1em",
                  fontSize: "1.5rem",
                  border: "solid 3px black",
                  borderRadius: "5px",
                }}
                className="box"
              >
                Zu unseren Studenten
              </button>
            </Link>
            <div className="example-container">
              <div data-aos="zoom-in-up" className="landing-container">
                <UilBracketsCurly className="icons-landing" />
                <div className="landing-info-container">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <span>Lorem, ipsum.</span>
                </div>
              </div>

              <div data-aos="zoom-in-up" className="landing-container">
                <UilCodeBranch className="icons-landing" />
                <div className="landing-info-container">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <span>Lorem, ipsum.</span>
                </div>
              </div>

              <div data-aos="zoom-in-up" className="landing-container">
                <UilGithubAlt className="icons-landing" />
                <div className="landing-info-container">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <span>Lorem, ipsum.</span>
                </div>
              </div>

              <div data-aos="zoom-in-up" className="landing-container">
                <UilDatabase className="icons-landing" />
                <div className="landing-info-container">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <span>Lorem, ipsum.</span>
                </div>
              </div>

              <div data-aos="zoom-in-up" className="landing-container">
                <UilLaptop className="icons-landing" />
                <div className="landing-info-container">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <span>Lorem, ipsum.</span>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1.6}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            backgroundImage: `url(${officeBlue})`,
            backgroundSize: "cover",
          }}
        >
          <div className="header-landing">
            <h1>Erfolgsstories</h1>
            <h2>Unsere IT-Talente bei unseren Partnern</h2>
            <div className="sucess-container">
              <div className="video-landing-container">
                <p>Unser Codecool Student bei unserem Partner Smatrics</p>
                <iframe
                  width="770"
                  height="415"
                  src="https://www.youtube.com/embed/qyV_A9wRHO8?start=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="students-landing-container"></div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={1.7}
          style={{
            backgroundImage: `url(${BusinessBLue})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="header-landing"
            onClick={() => ref.current.scrollTo(3)}
          >
            <h1>Werden Sie Partner !</h1>
            <h2 style={{ textAlign: "center" }}>
              Jetzt individuellen Beratungstermin vereinbaren <br />
              und Zugriff auf unseren Techpool erhalten
            </h2>

            <a href="https://business.codecool.com/">
              <button
                style={{
                  color: "black",
                  backgroundColor: "white",
                  paddingInline: "1em",
                  fontSize: "1.5rem",
                  border: "solid 3px black",
                  borderRadius: "5px",
                  marginTop: "1rem",
                }}
                className="box"
              >
                CodeCool Bussines
              </button>
            </a>
            <div className="business-container">
              <div className="business-container-card">
                <img src={Lydia} alt="" />
                <div className="business-card-text">
                  <h2>Lydia Jeschko</h2>
                  <p>Business Development Manger Austria</p>
                  <p>sigrid.hanutsch@Codecool.com</p>
                </div>
              </div>
              <div className="business-container-card">
                <img src={Sigrid} alt="" style={{ width: "60%" }} />
                <div className="business-card-text">
                  <h2>Sigrid Hanutsch-Taferner</h2>
                  <p>Country Manger-Austria</p>
                  <p>sigrid.hanutsch@Codecool.com</p>
                </div>
              </div>
              <div className="business-container-card">
                <img src={Isabella} alt="" />
                <div className="business-card-text">
                  <h2>Isabella Kristina Miglinci </h2>
                  <p>Marketing Manager Austria</p>
                  <p>marketing@codecool.com</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.8}
          factor={1.8}
          className="students-langing-parallax-gif"
          // sticky={{start: 1.9, end: 3}}
        >
          <div className="landing-students-container">
            <img src={john} alt="John Travolta" className="landing-gif" />
            <div className="landing-students-text-container">
              <h1>Und, wo sind jetzt diese Studenten?</h1>
              <Link to="/students">
                <button className="neon-button">Hier</button>
              </Link>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          factor={1.0}
          className="students-langing-footer"
          onClick={() => ref.current.scrollTo(2)}
        >
          <div className="landing-footer">
            <img src={Logo} alt="" />
            <div className="contact-div">
              <h1>CodeCool Austria – Vienna</h1>
              <h2>Liechtensteinstraße 111-1151090, Wien</h2>
              <h2>+43 676 557 4252</h2>
              <h2>business@codecool.com</h2>
            </div>
           
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
