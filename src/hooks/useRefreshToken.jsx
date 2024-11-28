// import { useAuth } from './useAuth';
// import { api } from '../services/api';
// import { useEffect } from 'react';

// export const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {


//         try {
//             const novoRefreshToken = localStorage.getItem('refreshToken');

//             if (!novoRefreshToken) {
//                 throw new Error('Refresh Token não está disponível')
//             }

//         const response = await api.post('/adm/refresh-token', {
//             token: novoRefreshToken
//         });

//         console.log('Resposta da API:', response.data);

//         //extraindo token
//         //***falta extrair **/

//         // const { accessToken, refreshToken } = response.data;
//         const accessToken = response?.data?.accessToken;
//         const refreshToken = response?.data?.refreshToken;

//         setAuth((prev) => ({
//             ...prev,
//             accessToken,
//             refreshToken,
//         }));

//         //atualiza o localStorage
//         localStorage.setItem('Access Token:', accessToken);
//         localStorage.setItem('Refresh Token:', refreshToken);

//         return accessToken; 
//         } catch (error) {

//         }

//     }
//     return refresh;
// };


// import { useAuth } from './useAuth';
// import { api } from '../services/api';

// export const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {

//         try {
//             const novoRefreshToken = localStorage.getItem('refreshToken');

//             if (!novoRefreshToken) {
//                 throw new Error('Refresh Token não está disponível')
//             }

//         const response = await api.post('/adm/refresh-token', {
//             refreshToken: novoRefreshToken
//         });

//         console.log('Resposta da API:', response.data);

//         const accessToken = response?.data?.accessToken;
//         const refreshToken = response?.data?.refreshToken;

//         setAuth((prev) => ({
//             ...prev,
//             accessToken,
//             refreshToken,
//         }));

//         //atualiza o localStorage
//         localStorage.setItem('Access Token:', accessToken);
//         localStorage.setItem('Refresh Token:', refreshToken);

//         return accessToken; 
//         } catch (error) {

//         }

//     }
//     return refresh;
// };


// import { useAuth } from './useAuth';
// import { api, axiosPrivate } from '../services/api';

// export const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {

//         const newRefreshToken = localStorage.getItem('refreshToken')


//         const response = await api.post('/adm/refresh-token', {
//             body: {
//                 newRefreshToken, 
//             }
//         });

//         console.log('Resposta da API:', response.data);


//         const { acessToken, refreshToken } = response?.data

//         setAuth(prev => {
//             console.log(JSON.stringify(prev));
//             console.log(response.data.acessToken);

//             setAuth(prev => ({
//                 ...prev,
//                 acessToken,
//                 refreshToken,
//             }));
//             localStorage.setItem('Access Token:', acessToken);
//             localStorage.setItem('Refresh Token:', refreshToken);


//         })

//         return response.data.acessToken;

//     }
//     return refresh;
// };

import { useAuth } from './useAuth';
import { api, axiosPrivate } from '../services/api';

export const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {

            const response = await api.get('/adm/refresh-token', {

            });

            console.log('Resposta da API:', response.data);

            const { accessToken, refreshToken: newRefreshToken } = response.data;

            // Atualizando o estado de autenticação
            setAuth(prev => ({
                ...prev,
                accessToken,
                refreshToken: newRefreshToken,
            }));

            // Armazenando tokens em localStorage (considerar cookies para maior segurança)
            localStorage.setItem('Access Token', accessToken);
            // localStorage.setItem('Refresh Token', newRefreshToken);

            return accessToken;
        } catch (error) {
            console.error('Erro ao renovar o token:', error);
            throw error;
        }
    };

    return refresh;
};