import LandingLayout from "layouts/landingLayout.jsx";
import StyledHome from "./styledHome";

import AboutMe from "components/aboutMe/aboutMe";
import Skills from "components/skills/skills";
import Education from "components/education/education";
import Projects from "components/projects/projects";

const Home = () => {
    return (
        <LandingLayout>
            <StyledHome>
                <AboutMe/>
                <Skills/>
                <Education/>
                <Projects/>
            </StyledHome>
        </LandingLayout>
    );
}
 
export default Home;