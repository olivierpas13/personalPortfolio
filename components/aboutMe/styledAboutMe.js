import styled from "styled-components";

const StyledAboutMe = styled.section`
    .image-container{
            box-shadow: 0 0 1px #ccc;
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 0;
            position: relative;
            overflow: hidden;
            border-radius: 0.5rem;
            .presentation{
                color: whitesmoke;
                z-index: 1;
                text-align: left;
                display: flex;
                justify-content: left;
                width: 100%;
                padding-left: 5%;
            }
        }
    .links{
            ul{
                list-style: none;
                display: flex;
                flex-direction: row;
                padding-bottom: 1em;
                li{
                    a{
                        text-decoration: none;
                    }
                }
            }
        }
    .about-me{
        background-color: white;
        border-radius: 1em;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 1px gray;
        padding: 1em;
        h2{
            color: #111;
            font-family: 'Courier New', Courier, monospace !important;
            letter-spacing: 0.2em;
        }
        p{
            color:#222;
            line-height: 2em;
            padding-top: 0.5em;
        }
    }
`

export default StyledAboutMe;