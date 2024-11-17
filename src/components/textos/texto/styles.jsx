import styled from "styled-components";

export const StyleText = styled.p`
    font-size: ${(props) => props.fontSize || props.theme.fontSize.texto};
    color: ${(props) => props.color || props.theme.colors.white};
`