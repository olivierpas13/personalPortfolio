import LandingLayout from "layouts/landingLayout.jsx";
import StyledHome from "./styledHome";

import AboutMe from "components/aboutMe/aboutMe";
import Skills from "components/skills/skills";
import Education from "components/education/education";
import Projects from "components/projects/projects";
import Contact from "components/contact/contact";

const Home = () => {
    return (
        <LandingLayout>
            <StyledHome>
                <AboutMe/>
                <Skills/>
                <Education/>
                <Projects/>
                <Contact/>
            </StyledHome>
        </LandingLayout>
    );
}
 
export default Home;