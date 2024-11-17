import styled from "styled-components";

const getInputStyles = (theme, variant) => {
    const variants = {
        default: {
            width: '23rem',
            backgroundColor: theme.colors.black,
            padding: '1.5rem 1rem',
            border: 'solid 1px orange'
        },
        alternate: {
            width: '23rem',
            backgroundColor: theme.colors.white,
            padding: '1rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            outline: 'none'

        }
    }

    return variants[variant] || variants.default
}

export const DivInputLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`

export const InputStyles = styled.input`
    ${(props) => {
        const style = getInputStyles(props.theme, props.$variant)

        return `
            width:${style.width};
            background-color: ${style.backgroundColor};
            padding: ${style.padding};
            border: ${style.border};
            border-radius: ${style.borderRadius};
            outline: ${style.outline}
            
        `
    }}
`

export const LabelStyles = styled.label`
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.texto}px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    gap: .5rem;
`

