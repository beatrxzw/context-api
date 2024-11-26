import styled from "styled-components";


export const StyleSubtitulo = styled.p`
    font-size: ${(props) => props.fontSize || props.theme.fontSize.subtitle };
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    display: flex;
    gap: 0.1rem;
    margin: ${(props) => props.$margin|| '0.3rem 0 0 1.4rem'};
    /* margin: ${(props) => props.margin|| '0.3rem 0 0 1.4rem'}; */
`
export const StyleSubtituloLink = styled.a`
    font-size: ${({ theme }) => theme.fontSize.subtitulo};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`