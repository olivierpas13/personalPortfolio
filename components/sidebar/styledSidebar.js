import styled from "styled-components"

const StyledSidebar = styled.nav`
    position: fixed;
    font-size: 1.2em;
    box-shadow: 0 0 1px #bbb;
    border-radius: 1em;
    display: block;
    justify-content: center;
    border: 1px solid #ddd;
    background-color: white;
    width: 15%;
    height: 90vh;
    padding: 0;
    margin-top: 0;
    ul{
        padding: 1em;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        list-style: none;
        li{
            display: flex;
            justify-content: left;
            align-items: center;
            padding: 1em 0;
            height: 100%;
            width: 100%;
            &:first-child{
                padding-top: 0;
            }
        }
        .options{
            font-size: 0.8em;
            display: flex;
            flex-direction: column;
                li{
                    color: #444;
                    width: 100%;
                    border-bottom: 1px solid #ccc;
                    &:hover{
                        cursor: pointer;
                        box-shadow: 0 0 1px #ddd;
                        color: #111;
                        transition: all 300ms;
                }
                    .option-title{
                        padding-left: 0.5em;
                }

                &:first-child{
                padding-top: 1em;

            }
            }
        }
        .myself{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image-container{
                box-shadow: 0 0 1px #ccc;
                width: 100%;
                height: 9em;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
                border-radius: 30em;
            }
            .description{
                padding: 0;
                .name{
                    padding-top: 0.3em;
                    font-size: 1em;
                    font-weight: 600;
                    color: #444;
                }
                .profession{
                    padding-top: 0.3em;
                    font-size: 0.7em;

                }
            }
        }
    }
`

export default StyledSidebar;