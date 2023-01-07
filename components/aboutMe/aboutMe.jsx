import Image from "next/image";

import codeImage from "public/codeImage.webp";

import StyledAboutMe from "./styledAboutMe";
import BasicButton from "components/generalComponents/button";

const AboutMe = () => {
  return (
    <StyledAboutMe>
        <div className="image-container">
          <div className="presentation">
            <h1>Hi, I&apos;m Olivier and I solve problems :)</h1>
          </div>
          <Image alt="code-image" src={codeImage} fill></Image>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="https://github.com/olivierpas13" target="blank">
                <BasicButton>Github</BasicButton>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olivier-paspuel-18909b244/"
                target="blank"
              >
                <BasicButton>LinkedIn</BasicButton>
              </a>
            </li>
            <li>
              <a href="https://fort-ten.vercel.app/" target="blank">
                <BasicButton>Fort, bug tracking software</BasicButton>
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me">
          <h2>Who am I?</h2>
          <p>
            I&apos;m a hard-working and responsible person who always tries to
            learn new things and face new challenges. I&apos;m currently a
            software engineering student at Universidad de las Fuerzas Armadas -
            ESPE, I also studied software development at the Fullstack-Open Boot Camp created by the
            University of Helsinki, and I achieved several diplomas,
            I consider myself to be better at front-end
            development, although I have knowledge about back-end too.
          </p>
        </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
