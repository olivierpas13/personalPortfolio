import styled from "styled-components";

const StyledLandingLayout = styled.section`
padding: 2em 5em;
    background-color: rgb(243, 242, 239);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .sidebar{
        max-width: 20%;
        flex-grow: 1;
    }
    .main-content{
        flex-grow: 5;
        width: 80%;
    }
`

export default StyledLandingLayout;