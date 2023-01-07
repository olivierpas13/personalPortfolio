import styled from "styled-components";

const StyledEducation = styled.section`
    background-color: white;
    border-radius: 1em;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 1px gray;
    padding: 1em;
    margin-top: 2em;
    h2{
        color: #111;
        font-family: 'Courier New', Courier, monospace !important;
        letter-spacing: 0.2em;
    }
    ul{
        color:#222;
        line-height: 2.2em;
        padding-top: 0.5em;
        li{
            a{
                color: #555;
                &:hover{
                    color: #222;
                }
                &:active{
                    color: #111;
                }
            }
        }
    }
`

export default StyledEducation;