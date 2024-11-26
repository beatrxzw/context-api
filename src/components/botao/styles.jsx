import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: ${(props) => props.width || "23rem" } ;
    background-color: ${(props) => props.backgroundColor || props.theme.colors.black} ; 
    padding: 1rem 10rem;
    display: flex;
    justify-content: center;
    color: ${(props) => props.color || props.theme.colors.white};
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 1.4rem;
`