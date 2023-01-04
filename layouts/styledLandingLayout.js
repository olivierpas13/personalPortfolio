import styled from "styled-components";

const StyledLandingLayout = styled.section`
    padding: 2em 5em;
    background-color: rgb(243, 242, 239);
    height: 100vh;
    display: flex;
    flex-direction: column;
    .logo{
        flex: 1;
        .name-logo{
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            width: 100%; 
            border: 1px solid #ccc;
            box-shadow: 0 0 1px black inset;
            font-size: 1.2em;
            height: 4em;
            top: 0;
            left: 0;
        }
        
    }
    .content{
        flex: 10;
        display: flex;
        flex-direction: column;
        .sidebar{
            flex: 1;
            max-width: 20%;
        }
        .main-content{
            flex: 10;
            padding-left: 20%;
            padding-top: 2em;
            width: calc(80% - 20%);
        }    
    }

`

export default StyledLandingLayout;