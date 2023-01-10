import styled from "styled-components";

import HomeSection from "components/generalComponents/homeSection";

const StyledEducation = styled(HomeSection)`
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