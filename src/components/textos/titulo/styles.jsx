import styled from "styled-components"

export const Titulo = styled.p`
    font-size: ${({theme}) => theme.fontSize.title}px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
`