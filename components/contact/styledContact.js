import styled from "styled-components"
import HomeSection from "components/generalComponents/homeSection";

const StyledContact = styled(HomeSection)`
    .information-section{
        width: 100%;
        ul{
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 1em;
            display: grid;
            padding: 1em;
        li{
            padding: 0.5em;
            border: 1px solid black;
            border-radius: 0.4em;
            background-color: #111;
            display: inline-block;
            height: fit-content;
            a{
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                .icon{
                    padding-right: 1em;
                    flex: 1;
                }
                p{
                    flex: 7;
                }
            }
            &:hover{
                background-color: #222;
                transition: all 300ms;
            }
        }
    }
}

`

export default StyledContact;
