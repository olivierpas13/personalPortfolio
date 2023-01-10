import styled from "styled-components";

import HomeSection from "components/generalComponents/homeSection";

const StyledProjects = styled(HomeSection)`
        .project{
            border: 1px solid #bbb;
            box-shadow: 0px 0px 2px black;
            border-radius: 1em;
            padding: 1em;
            margin-bottom: 1.5em;
            .title{
                padding: 1em;
                height: 2em;
                display: flex;
                flex-direction: row;
                align-items: center;
                .logo{
                    margin-right: 1em;
                    border-radius: 20em;
                    position: relative;
                    overflow: hidden;
                    flex: 1;
                    /* width: 50%; */
                    height: 100%;
                }
                .project-title{
                    font-family: 'Courier New', Courier, monospace;
                    flex: 20;
                }
            }
            .status{
                display: inline-block;
                font-family: 'Courier New', Courier, monospace;
                border: 1px solid gray;
                border-radius: 1rem;
                padding: 0.3em;
                color: white;
                font-weight: 400;
                background-color: black;
                margin: 0.4em 0;
            }
            .tech{
                padding: 1em 0;
                color: #aaa;
                font-family: 'Courier New', Courier, monospace;
            }
            .description{
                line-height: 2em;
            }
            &:first-child{
                margin-top: 1em;
            }
        }    
    `

export default StyledProjects;