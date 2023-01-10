import styled from "styled-components";

import HomeSection from "components/generalComponents/homeSection";

const StyledSkills = styled(HomeSection)`
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
