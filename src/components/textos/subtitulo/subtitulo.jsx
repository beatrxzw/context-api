import { StyleSubtitulo, StyleSubtituloLink } from "./styles";


export function Subtitle({subtitulo, subtitulolink, link, fontSize, margin}) {
    return(
        <StyleSubtitulo fontSize={fontSize} margin={margin}>{subtitulo}
        <StyleSubtituloLink href={link}>
            {subtitulolink}
        </StyleSubtituloLink>
        </StyleSubtitulo>
    )
}