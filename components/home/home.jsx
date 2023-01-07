import LandingLayout from "layouts/landingLayout.jsx";
import StyledHome from "./styledHome";

import AboutMe from "components/aboutMe/aboutMe";
import Skills from "components/skills/skills";

const Home = () => {
    return (
        <LandingLayout>
            <StyledHome>
                <AboutMe/>
                <Skills/>
            </StyledHome>
        </LandingLayout>
    );
}
 
export default Home;