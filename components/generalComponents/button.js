import styled from 'styled-components';

const BasicButton = styled.button`
    width: max-content;
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em 1.5em;
    display: block;
    margin: 0.6em;
    background-color: black;
    cursor: pointer;
    color: white;
    &:hover{
        background-color: rgb(10, 10, 10);
    }
    &:active{
        background-color: rgb(25, 25, 25);
    }
`;

export default BasicButton;