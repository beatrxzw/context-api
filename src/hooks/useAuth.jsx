import { useContext, useDebugValue } from "react";
import { AuthContext, AuthProvider } from "../contexts/Auth";

export const useAuth = () => {
    const {auth} = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Entrou" : "Saiu")

    return useContext(AuthContext);
}