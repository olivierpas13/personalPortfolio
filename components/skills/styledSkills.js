import styled from "styled-components";

const StyledSkills = styled.section`
    background-color: white;
    border-radius: 1em;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px gray;
    padding: 1em;
    margin-top: 2em;
    h2{
        font-family: 'Courier New', Courier, monospace !important;
        color: #111;
        letter-spacing: 0.2em;
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        li{

            font-family: 'Courier New', Courier, monospace !important;
            color:#222;
            line-height: 2em;
            padding-top: 0.5em;
        }
    }
`

export default StyledSkills;
