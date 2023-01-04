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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga alias officiis dicta aspernatur, nihil impedit molestias maxime ut quia repudiandae ea? Harum reprehenderit incidunt temporibus cum similique corrupti cumque pariatur delectus autem sit doloribus perferendis, exercitationem provident cupiditate esse accusantium necessitatibus impedit. Itaque aliquid omnis adipisci soluta voluptatem dicta, qui excepturi minus eveniet accusamus eaque, corporis eos autem est minima similique accusantium ad consectetur magni quas cum harum deserunt!

                    {children}
                </main>
            </div>
        </StyledLandingLayout>
    );
}
 
export default LandingLayout;