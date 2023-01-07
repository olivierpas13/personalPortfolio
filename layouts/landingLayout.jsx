import Sidebar from "components/sidebar/sidebar";
import StyledLandingLayout from "./styledLandingLayout";

const LandingLayout = ({children}) => {
    return (
        <StyledLandingLayout>
            <div className="logo" >
                <header className="name-logo" >
                    Olivier Paspuel
                </header>
            </div>
            <div className="content" >
                <Sidebar className="sidebar" />
                <main className="main-content" >
                    {children}
                </main>
            </div>
        </StyledLandingLayout>
    );
}
 
export default LandingLayout;