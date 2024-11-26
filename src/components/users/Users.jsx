
    import React, { useEffect, useState } from "react";
    import { useRefreshToken } from "../../hooks/useRefreshToken";
    import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
    import axios from "axios";
    
    
    export const UseUser = () => {

        const refresh = useRefreshToken();
        const [users, setUsers] = useState();

        const handleRefresh = async () => {
            try {
                const newToken = await refresh(); // Atualiza o token
                console.log('Novo token recebido:', newToken);
                
            } catch (error) {
                console.error('Erro ao atualizar o token:', error);
            }
        };

    
            useEffect(() => {
                let isMounted = true;
                const controller = new AbortController();
    
                const getUsers = async () => {
                    try {
                        const response = await axios.get('https://dummyjson.com/users', {
                            signal: controller.signal
                        });
                        console.log(response.data);
                        isMounted && setUsers(response.data);
                    } catch (error) {
                        console.error(error)
                    }
                }
    
                getUsers();
    
                return () => {
                    isMounted = false;
                    controller.abort()
                }
            }, [])


        return (      
            <article>
                <h2>Users List</h2>
                {users?.length
                    ? (
                        <ul>
                            {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                        </ul>
                    ) : <p>No users to display</p>
                }
                
                <button onClick={handleRefresh}>Atualiza</button>
                <br/>
                
            </article>
        )
    };
