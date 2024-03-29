import styled from "styled-components"

const StyledContact = styled.section`
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
        padding: 1em;
        li{
            padding-bottom: 0.5em;
            color: #111;
            a{
                color: #111;
            }
            a:active{
                color: #222
            }
            a:visited{
                color: #333
            }
            
        }
    }

`

export default StyledContact;
