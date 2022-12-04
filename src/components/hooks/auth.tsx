import React, { createContext, useState, useContext } from 'react';
import { AuthConstants } from './constants/auth.constants';

interface IAuthContext {
    logged: boolean;
    userName: string;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<any> = ({ children }) => {


    const [userName, setuserName] = useState<string>('');

    const [logged, setLogged] = useState<boolean>(() => {

        const isLogged = localStorage.getItem(AuthConstants.MINHACARTEIRALOGGED);

        return !!isLogged;
    });


    const signIn = (email: string, password: string) => {
        if (email === 'rodrigo@email.com' && password === '123') {
            localStorage.setItem(AuthConstants.MINHACARTEIRALOGGED, 'true');
            setLogged(true);
            setuserName(email)
        } else {
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem(AuthConstants.MINHACARTEIRALOGGED);        
        clearAll()
    }

    const clearAll = () => {
        setLogged(false);
        setuserName('')
    }

    return (
        <AuthContext.Provider value={{ logged, userName, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };