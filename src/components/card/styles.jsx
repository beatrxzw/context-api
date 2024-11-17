
import styled from "styled-components";

const getBoxStyles = (theme, variant) => {
    const variants = {
        default: {
            display: 'flex',
            flexDirection: 'column',
            width: '38%',
            padding: '5.3rem',
            border: '1px solid orange',
            backgroundColor: theme.colors.pink
        },
        boxStyle:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '38%',
            padding: '3% 5% ',
            backgroundColor: theme.colors.limeGreen,
            borderRadius: '20px'
        }
    }
    return variants[variant] || variants.default;

}

export const Box = styled.div`
    ${(props) => {
        const style = getBoxStyles(props.theme, props.$variant)

        return`
            display: ${style.display};
            flex-direction: ${style.flexDirection};
            align-items: ${style.alignItems};
            width: ${style.width};
            padding: ${style.padding};
            background-color: ${style.backgroundColor};
            border-radius: ${style.borderRadius};
        `
    }}
`