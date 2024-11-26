    import { AuthContext } from "../../contexts/Auth";
    import { useState, useContext } from "react";
    import {api} from "../../services/api";


    import { Box } from "./styles";
    import { Title } from "../textos/titulo/title"
    import { Subtitle } from "../textos/subtitulo/subtitulo";
    import { NInputs } from "../input";
    import { Button } from "../botao";
    import { useNavigate } from "react-router-dom";


    export const Card = () => {

        const [form, setForm] = useState('')
        const { setAuth, auth } = useContext(AuthContext)
        const navigate = useNavigate()

        console.log('auth', auth);


        function handleChange(event) {
            setForm({...form, [event.target.name]: event.target.value})
        }

        const handleSubmit = async (e) =>{
            e.preventDefault();
            try {
                const response = await api.post('/adm/login', {cnpj: form.cnpj, password: form.password},
                    {
                        headers: {'Content-Type': 'application/json'},
                    }
                );
                
                //extraindo tokens 
                const responseData = response.data;
                const replaceData = responseData
                .replace("seu token gerado é ", "")
                .replace(", e o seu refresh token gerado é ", "|");

                console.log(replaceData);

                //dividindo
                const tokens = replaceData.split("|");
                const accessToken = tokens[0];
                const refreshToken = tokens[1];

                console.log( "accessToken: ",accessToken);
                console.log("refreshToken: ",refreshToken);

                if (accessToken && refreshToken) {
                    //atualiza contexto de autenticacao
                    localStorage.setItem('accessToken', accessToken);
                    setAuth(true);
                    localStorage.setItem("refreshToken", refreshToken)
    
                    navigate("/allusers")
                    window.alert("Usuário logado com sucesso!")
                } else {
                    console.log("Tokens não encontrados na resposta.");
                }

                

                // if (form.cnpj == '12345678000190' && form.password == '1234') {
                //     setAuth(true)
                //     navigate("/home");
                //     window.alert('logado com sucesso')
                //   }

            } catch (error) {
                console.log('Erro ao realizar login', error);
                setAuth(false);
            }
        }

        const InputConfig = [
            {
                label: 'cnpj',
                type: 'text',
                name: 'cnpj',
                placeholder: 'Escreva seu cnpj',
                onChange: handleChange 
            },  

            {
                label: 'Senha',
                type: 'password',
                name: 'password',
                placeholder: 'Escreva sua senha',
                onChange: handleChange 
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

                    <form action="" onSubmit={handleSubmit}>

                        <NInputs
                            inputs={InputConfig}
                        />

                        <Button
                            texto='Entrar'
                            type='submit'
                        />

                    </form>

                    <Subtitle
                        subtitulo='Esqueceu a senha?'
                        subtitulolink='Recuperar'
                        link='https://www.youtube.com/watch?v=R2RyEajBpVo'
                        fontSize='14px'
                        $margin='1.4rem 0 0 0'
                    />


                </Box>

            </>
        )
    }


    // import { AuthContext } from "../../contexts/Auth";
    // import { useState, useContext } from "react";
    // import api from "../../services/api";


    // import { Box } from "./styles";
    // import { Title } from "../textos/titulo/title"
    // import { Subtitle } from "../textos/subtitulo/subtitulo";
    // import { NInputs } from "../input";
    // import { Button } from "../botao";
    // import { useNavigate } from "react-router-dom";


    // export const Card = () => {

    //     const [form, setForm] = useState('')
    //     const { setAuth, auth } = useContext(AuthContext)
    //     const navigate = useNavigate()

    //     console.log('auth', auth);


    //     function handleChange(event) {
    //         setForm({...form, [event.target.name]: event.target.value})
    //     }

    //     const handleSubmit = async (e) =>{
    //         e.preventDefault();
    //         try {
    //             const response = await api.post('/adm/login', 
    //                 {cnpj: form.cnpj, password: form.password},
    //                 {
    //                     headers: {'Content-Type': 'application/json'},
                    
    //                 }
    //             );
    //             const accessToken = response.data;
                
    //             console.log("Resposta da API:", response.data);

    //             setAuth({ accessToken: token }); 
    //             console.log('Token recebido:', accessToken);

    //             setForm('');
    //             navigate("/home")
    //             window.alert("usuario logado")

    //         } catch (error) {
    //             if (!err?.response) {
    //                 setErrMsg('Sem resposta do servidor');
    //             } else if (err.response?.status === 400) {
    //                 setErrMsg('Usuário ou senha errados');
    //             } else if (err.response?.status === 401) {
    //                 setErrMsg('Não tem autorização');
    //             } else {
    //                 setErrMsg('Falha no Login!!');
    //             }
    //             errRef.current.focus();
    //         }
    //     }


    //     const InputConfig = [
    //         {
    //             label: 'cnpj',
    //             type: 'text',
    //             name: 'cnpj',
    //             placeholder: 'Escreva seu cnpj',
    //             onChange: handleChange 
    //         },  

    //         {
    //             label: 'Senha',
    //             type: 'password',
    //             name: 'password',
    //             placeholder: 'Escreva sua senha',
    //             onChange: handleChange 
    //         }
    //     ]

    //     return (
    //         <>

    //             <Box $variant="boxStyle">

    //                 <Title
    //                     titulo='Bem vindo de volta'
    //                 />

    //                 <Subtitle
    //                     subtitulo='Quer ser um colaborador?'
    //                     subtitulolink='Se inscreva'
    //                     link='https://eelslap.com/'
    //                     fontSize=''
    //                 />

    //                 <form action="" onSubmit={handleSubmit}>

    //                     <NInputs
    //                         inputs={InputConfig}
    //                     />

    //                     <Button
    //                         texto='Entrar'
    //                         type='submit'
    //                     />

    //                 </form>

    //                 <Subtitle
    //                     subtitulo='Esqueceu a senha?'
    //                     subtitulolink='Recuperar'
    //                     link='https://www.youtube.com/watch?v=R2RyEajBpVo'
    //                     fontSize='14px'
    //                     $margin='1.4rem 0 0 0'
    //                 />


    //             </Box>

    //         </>
    //     )
    // }