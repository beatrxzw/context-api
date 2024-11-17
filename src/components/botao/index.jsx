import { ButtonStyle } from "./styles";

export const Button = ({site, texto, width, backgroundColor, color}) => {
    return(
        <ButtonStyle href={site} width={width} backgroundColor={backgroundColor} color={color}>
            {texto}
        </ButtonStyle>
    )
}