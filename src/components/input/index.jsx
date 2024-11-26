import { WrapperDiv, InputStyles, LabelStyles, DivInputLabel } from "./styles"

export const InputGen = ({ type, name, placeholder, value, label, onChange }) => {
    return (

        <DivInputLabel>

            <LabelStyles>{label}</LabelStyles>

            <InputStyles
                $variant="alternate"
                type={type}
                value={value}
                name={name}
                placeholder={placeholder} 
                onChange={onChange}
                />

        </DivInputLabel>

    )
}

export const NInputs = ({ inputs }) => {
    return(
      <WrapperDiv>
        {inputs.map((inputProps, index) => (
          <InputGen key={index} {...inputProps} />
        ))}
      </WrapperDiv>
    );
  }