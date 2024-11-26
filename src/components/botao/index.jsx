import { ButtonStyle } from "./styles";

export const Button = ({site, texto, width, backgroundColor, color, type}) => {
    return(
        <ButtonStyle href={site} width={width} backgroundColor={backgroundColor} color={color} type={type}>
            {texto}
        </ButtonStyle>
    )
}