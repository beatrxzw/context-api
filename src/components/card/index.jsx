import { Box } from "./styles";
import { Title } from "../textos/titulo/title"
import { Subtitle } from "../textos/subtitulo/subtitulo";
import { NInputs } from "../input";
import { Button } from "../botao";
import { Text } from "../textos/texto";


export const Card = () => {

    const InputConfig = [
        {
            label: 'CPF',
            type: 'text',
            placeholder: 'Escreva seu CPF'
        },

        {
            label: 'Senha',
            type: 'password',
            placeholder: 'Escreva sua senha'
        }
    ]


    return (
        <>
        
            <Box $variant="boxStyle">

                <Title
                    titulo='Bem vindo de volta'
                />

                <Subtitle
                    subtitulo='Quer ser um colaborador?'
                    subtitulolink='Se inscreva'
                    link='https://eelslap.com/'
                    fontSize=''
                />

                <NInputs
                inputs={InputConfig}
                />                

                <Button
                site='https://spinningrat.online/'
                texto='Entrar'
                />

                <Subtitle
                subtitulo='Esqueceu a senha?'
                subtitulolink='Recuperar'
                link='https://www.youtube.com/watch?v=R2RyEajBpVo'
                fontSize='14px'
                margin='1.4rem 0 0 0'
                />


            </Box>

        </>
    )
}