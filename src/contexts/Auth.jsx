import React, {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext();



export function AuthProvider ({children}){
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        // Verifique se o token existe ao carregar a aplicação
        const token = localStorage.getItem('accessToken');
        if (token) {
          setAuth(true);
        }
      }, []); // Esse useEffect só será executado uma vez, ao carregar o componente
    
      const login = (token) => {
        localStorage.setItem('accessToken', token);
        setAuth(true);
      };
    
      const logout = () => {
        localStorage.removeItem('accessToken');
        setAuth(false);
      };

    return(
        <AuthContext.Provider value={{auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

