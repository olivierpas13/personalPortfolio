import Sidebar from "components/sidebar/sidebar";
import StyledLandingLayout from "./styledLandingLayout";

const LandingLayout = ({children}) => {
    return (
        <StyledLandingLayout>
            <Sidebar className="sidebar" />
            <main className="main-content" >
                {children}
            </main>
        </StyledLandingLayout>
    );
}
 
export default LandingLayout;